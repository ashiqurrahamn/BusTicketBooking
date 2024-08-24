package com.app.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tickets {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Temporal(TemporalType.DATE)
	@Column(nullable = false)
	private Date bookedDate;
	@Column(length = 30, nullable = false)
	private String OwnerName;
	@Column(nullable = false)
	private transient String ownerPhoneNo;
	@Column(nullable = false)
	private double fare;
	@Column(nullable = false)
	private Integer noOfSeats;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private PaymentType paymentMode;
	@ManyToOne
	@JoinColumn(name = "busId")
	private Bus busId;
	@ManyToOne
	@JoinColumn(name = "userId")
	private User userId;
	@JsonIgnore
	@OneToMany(mappedBy = "ticketId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Passenger> passengers = new ArrayList<Passenger>();
	/*
	 * INSERT INTO Tickets (booked_Date, owner_Name, owner_Phone_no, fare,
	 * no_Of_Seats, payment_Mode, bus_Id, user_Id)
	 * VALUES ("2020-01-26", "AMAN", 7587042615, 400, 1, "CASH", 2, 2);
	 */

	public Tickets() {
		System.out.println("Tickets constr");
	}

	public Tickets(Integer id, Date bookedDate, String ownerName, String ownerPhoneNo, double fare, Integer noOfSeats,
			PaymentType paymentMode) {
		super();
		this.id = id;
		this.bookedDate = bookedDate;
		this.OwnerName = ownerName;
		this.ownerPhoneNo = ownerPhoneNo;
		this.fare = fare;
		this.noOfSeats = noOfSeats;
		this.paymentMode = paymentMode;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(Date bookedDate) {
		this.bookedDate = bookedDate;
	}

	public String getOwnerName() {
		return OwnerName;
	}

	public void setOwnerName(String ownerName) {
		OwnerName = ownerName.toUpperCase().trim();
	}

	public String getOwnerPhoneNo() {
		return ownerPhoneNo;
	}

	public void setOwnerPhoneNo(String ownerPhoneNo) {
		this.ownerPhoneNo = ownerPhoneNo;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public Integer getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(Integer noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public PaymentType getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(PaymentType paymentMode) {
		this.paymentMode = paymentMode;
	}

	public Bus getBusId() {
		return busId;
	}

	public void setBusId(Bus busId) {
		this.busId = busId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public List<Passenger> getPassengers() {
		return passengers;
	}

	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}

	public void addPassenger(Passenger p) {
		this.passengers.add(p);
		p.setTicketId(this);
	}

	public void removePassenger(Passenger p) {
		this.passengers.remove(p);
		p.setTicketId(null);
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", bookedDate=" + bookedDate + ", OwnerName=" + OwnerName + ", ownerPhoneNo="
				+ ownerPhoneNo + ", fare=" + fare + ", noOfSeats=" + noOfSeats + ", paymentMode=" + paymentMode + "]";
	}

}
