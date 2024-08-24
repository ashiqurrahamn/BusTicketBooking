package com.app.dao;

import java.util.List;

import com.app.pojos.Seats;

public interface ISeatsDao {
	public List<Seats> getSeatsByBusId(int busId);
	public String bookSeatsByBus(int busId, String date,int noOfSeats);
	public String addSeatsByBus(int busId, String date, int noOfSeats);
	public String removeSeatsByBus(int busId, String date);

}
