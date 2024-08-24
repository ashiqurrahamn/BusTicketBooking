package com.app.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ISeatsDao;
import com.app.pojos.Seats;
import com.app.repository.BusRepository;

@Service
@Transactional
public class SeatsServiceImpl implements ISeatsService
{
	@Autowired
	ISeatsDao dao;
	
	@Autowired
	private BusRepository busRepository;

	@Override
	public List<Seats> getSeatsByBusId(int busId) {
		return dao.getSeatsByBusId(busId);
	}

	@Override
	public String bookSeatsByBus(int busId, String date, int noOfSeats) {
		return dao.addSeatsByBus(busId, date, noOfSeats);
	}

	@Override
	public String addSeatsByBus(int busId, String date, int noOfSeats) {
		return dao.addSeatsByBus(busId, date, noOfSeats);
	}

	@Override
	public String removeSeatsByBus(int busId, String date) {
		return dao.removeSeatsByBus(busId, date);
	}
	
	@Override
    public List<Seats> getSeatNumbersByBusId(int busId) {
        return busRepository.findSeatNumbersByBusId( busId);
    }
}
