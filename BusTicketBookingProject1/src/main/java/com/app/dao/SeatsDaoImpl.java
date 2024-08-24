package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.app.pojos.Bus;
import com.app.pojos.DayFromDate;
import com.app.pojos.Seats;

@Repository
public class SeatsDaoImpl implements ISeatsDao {

	@PersistenceContext
	private EntityManager mgr;

	@Override
	public List<Seats> getSeatsByBusId(int busId) {
		String jpql = "SELECT s FROM Seats s WHERE s.bus.id = :busId";
		try {
			TypedQuery<Seats> query = mgr.createQuery(jpql, Seats.class);
			query.setParameter("busId", busId);
			return query.getResultList();
		} catch (NoResultException e) {
			throw new RuntimeException("No seats found for the given bus ID", e);
		} catch (NonUniqueResultException e) {
			throw new RuntimeException("Multiple seats found for the given bus ID", e);
		}
	}

	@Override
	public String bookSeatsByBus(int busId, String date, int noOfSeats) {
		System.out.println("in dao seats impl");
		String jpql = "select s from Seats s where s.busId = :busId and s.bookDate = :date";
		Bus b = mgr.find(Bus.class, busId);
		System.out.println(b);
		LocalDate d = DayFromDate.getLocalDate(date);
		System.out.println(d);
		Seats s = mgr.createQuery(jpql, Seats.class).setParameter("busId", b).setParameter("date", d).getSingleResult();
		System.out.println(s);
		if (noOfSeats < s.getAvailableSeats()) {
			s.setAvailableSeats((byte) (s.getAvailableSeats() - noOfSeats));

		}
		mgr.merge(s);
		return "Seats booked Successfully..";
	}

	@Override
	public String addSeatsByBus(int busId, String date, int noOfSeats) {
		String jpql = "select s from Seats s where s.busId = :busId and s.bookDate = :date";
		Bus b = mgr.find(Bus.class, busId);
		LocalDate d = DayFromDate.getLocalDate(date);
		Seats s = mgr.createQuery(jpql, Seats.class).setParameter("busId", b).setParameter("date", d).getSingleResult();
		if (noOfSeats < s.getAvailableSeats()) {
			s.setAvailableSeats((byte) (s.getAvailableSeats() + noOfSeats));
		}
		mgr.merge(s);
		return "Seats added successfully";
	}

	@Override
	public String removeSeatsByBus(int busId, String date) {
		String jpql = "select s from Seats s where s.busId = :busId and s.bookDate = :date";
		Bus b = mgr.find(Bus.class, busId);
		LocalDate d = DayFromDate.getLocalDate(date);
		Seats s = mgr.createQuery(jpql, Seats.class).setParameter("busId", b).setParameter("date", d).getSingleResult();
		b.removeSeats(s);
		mgr.merge(s);
		return "Seats removed successfully";

	}

}
