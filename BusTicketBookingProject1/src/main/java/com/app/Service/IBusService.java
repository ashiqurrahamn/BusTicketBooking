package com.app.Service;

import java.util.List;

import com.app.pojos.Bus;


public interface IBusService {
    List<Bus> getAllBus();

    Bus getBusById(int id);

    Bus addBus(Bus b, int routeId);

    String removeBus(int id);

    String updateBus(Bus b);

    List<Bus> getBusByRoutes(String source, String destination, String date);

}
