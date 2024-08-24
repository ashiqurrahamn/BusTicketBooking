package com.app.Service;

import java.util.List;

import com.app.pojos.Seats;

public interface ISeatsService {
	List<Seats> getSeatsByBusId(int busId);
	String bookSeatsByBus(int busId, String date, int noOfSeats);
	String addSeatsByBus(int busId, String date, int noOfSeats);
	String removeSeatsByBus(int busId, String date);
	List<Seats> getSeatNumbersByBusId(int busId);
}
