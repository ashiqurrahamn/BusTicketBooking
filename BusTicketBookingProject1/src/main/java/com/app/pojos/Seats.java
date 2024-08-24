package com.app.pojos;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;

@Entity
@Table(name = "seats")
public class Seats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    @Column(nullable = false)
    private LocalDate bookDate;
    @Column(nullable = false)
    private Byte availableSeats;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bus_id")
    private Bus busId;
    @Column(nullable = false)
    private String seatNumber;

    public Seats() {
        System.out.println("in seats constructor");
    }

    public Seats(LocalDate bookDate, Byte availableSeats) {
        this.bookDate = bookDate;
        this.availableSeats = availableSeats;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getBookDate() {
        return bookDate;
    }

    public void setBookDate(LocalDate bookDate) {
        this.bookDate = bookDate;
    }

    public Byte getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(Byte availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Bus getBusId() {
        return busId;
    }

    public void setBusId(Bus busId) {
        this.busId = busId;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    @Override
    public String toString() {
        return "Seats [id=" + id + ", bookDate=" + bookDate + ", availableSeats=" + availableSeats + ", busId=" + busId
                + "]";
    }

}
