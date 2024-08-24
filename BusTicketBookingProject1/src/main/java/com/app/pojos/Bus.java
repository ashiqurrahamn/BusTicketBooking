package com.app.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Bus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 30, nullable = false)
	private String busNo;
	@Column(nullable = false)
	private Byte capacity;
	@Enumerated(EnumType.STRING)
	@Column(length = 15, nullable = false)
	private BusType type;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern = "HH:mm", timezone = "Asia/Kolkata")
	@Column(nullable = false)
	private transient Date arrivalDate;
	@Temporal(TemporalType.TIME)
	@JsonFormat(pattern = "HH:mm", timezone = "Asia/Kolkata")
	@Column(nullable = false)
	private Date destinationDate;
	@Column(nullable = false)
	private float price;
	@ManyToOne
	@JoinColumn(name = "routeId")
	@JsonBackReference
	private Routes routeId;
	@OneToOne(mappedBy = "busId", cascade = CascadeType.ALL, orphanRemoval = true)
	private DayWhenRuns frequency;
	@JsonIgnore
	@OneToMany(mappedBy = "busId", cascade = CascadeType.ALL)
	private List<Seats> seats = new ArrayList<Seats>();
	@JsonIgnore
	@OneToMany(mappedBy = "busId", cascade = CascadeType.ALL)
	private List<Tickets> tickets = new ArrayList<Tickets>();
	@JsonIgnore
	@OneToMany(mappedBy = "busId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Contactus> feedbacks = new ArrayList<Contactus>();

	/*
	 * INSERT INTO Bus (bus_No, capacity, type, arrival_date, destination_date,
	 * price, route_Id) VALUES ('MH 04 HU 2363', 20, 'SEATER_AC', '06:30:00',
	 * '20:30:00', 850.00, 1); INSERT INTO Bus (bus_No, capacity, type,
	 * arrival_date, destination_date, price, route_Id) VALUES ('MH 04 HU 2364', 20,
	 * 'SEATER_AC', '07:30:00', '20:30:00', 750.00, 1); INSERT INTO Bus (bus_No,
	 * capacity, type, arrival_date, destination_date, price, route_Id) VALUES ('MH
	 * 04 HU 2354', 20, 'SEATER_AC', '09:30:00', '23:30:00', 750.00, 3); INSERT INTO
	 * Bus (bus_No, capacity, type, arrival_date, destination_date, price, route_Id)
	 * VALUES ('MH 04 HU 2344', 20, 'SEATER_NON_AC', '13:30:00', '01:30:00', 550.00,
	 * 4);
	 * 
	 */

	public Bus() {
		System.out.println("In bus");
	}

	public Bus(String busNo, Byte capacity, BusType type, Date arrivalDate, Date destinationDate, float price,
			DayWhenRuns frequency) {
		super();
		this.busNo = busNo;
		this.capacity = capacity;
		this.type = type;
		this.arrivalDate = arrivalDate;
		this.destinationDate = destinationDate;
		this.price = price;
		this.frequency = frequency;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public Byte getCapacity() {
		return capacity;
	}

	public void setCapacity(Byte capacity) {
		this.capacity = capacity;
	}

	public BusType getType() {
		return type;
	}

	public void setType(BusType type) {
		this.type = type;
	}

	public Date getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public Date getDestinationDate() {
		return destinationDate;
	}

	public void setDestinationDate(Date destinationDate) {
		this.destinationDate = destinationDate;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Routes getRouteId() {
		return routeId;
	}

	public void setRouteId(Routes routeId) {
		this.routeId = routeId;
	}

	public List<Tickets> getTickets() {
		return tickets;
	}

	public void setTickets(List<Tickets> tickets) {
		this.tickets = tickets;
	}

	public void addTickets(Tickets tickets) {
		this.tickets.add(tickets);
		tickets.setBusId(this);
	}

	public void removeTickets(Tickets tickets) {
		this.tickets.remove(tickets);
		tickets.setBusId(null);
	}

	public List<Seats> getSeats() {
		return seats;
	}

	public void setSeats(List<Seats> seats) {
		this.seats = seats;
	}

	public void addSeats(Seats seats) {
		this.seats.add(seats);
		seats.setBusId(null);
	}

	public void removeSeats(Seats seats) {
		this.seats.remove(seats);
		seats.setBusId(null);
	}

	public DayWhenRuns getFrequency() {
		return frequency;
	}

	public void setFrequency(DayWhenRuns frequency) {
		this.frequency = frequency;
	}

	public void addFrequency(DayWhenRuns f) {
		this.frequency = f;
		f.setBusId(this);
	}

	public void removeFrequency(DayWhenRuns f) {
		this.frequency = null;
		f.setBusId(null);
	}

	public List<Contactus> getFeedbacks() {
		return feedbacks;
	}

	public void setFeedbacks(List<Contactus> feedbacks) {
		this.feedbacks = feedbacks;
	}

	public void addFeedback(Contactus f) {
		this.feedbacks.add(f);
		f.setBusId(this);
	}

	public void removeFeedback(Contactus f) {
		this.feedbacks.remove(f);
		f.setBusId(null);
	}

	@Override
	public String toString() {
		return "Bus [id=" + id + ", busNo=" + busNo + ", capacity=" + capacity + ", type=" + type + ", arrivalDate="
				+ arrivalDate + ", destinationDate=" + destinationDate + ", price=" + price + ", routeid=" + routeId
				+ ", tickets=" + tickets + "]";
	}

}
