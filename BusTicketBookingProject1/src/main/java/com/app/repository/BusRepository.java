package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.app.pojos.Bus;
import com.app.pojos.Seats;

@Repository

public interface BusRepository extends JpaRepository<Bus, Integer> {

    @Query("SELECT s FROM Seats s WHERE s.busId.id = :busId")
    List<Seats> findSeatNumbersByBusId(@Param("busId") int busId);

    @Query("select b from Bus b join b.routeId r where b.routeId = :routeId and r.source=:source and r.destination=:destination")
    List<Bus> getBusByRoutes(@Param ("routeId") int routeId, @Param("source") String source, @Param("destination") String destination);
}
