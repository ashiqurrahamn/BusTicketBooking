package com.app.dao;

import java.util.List;

import com.app.pojos.Bus;

public interface IBusDao {
	public List<Bus> getAllBus();
	public Bus getBusById(int id);
	public Bus addBus(Bus b,int routeId);
	public String removeBus(int id);
	public String updateBus(Bus b);
	public List<Bus> getBusByRoutes(String source,String destination, String date);

}
