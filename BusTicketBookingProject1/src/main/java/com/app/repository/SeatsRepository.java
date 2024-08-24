package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.Seats;

public interface SeatsRepository extends JpaRepository<Seats, Integer> {

    
}
