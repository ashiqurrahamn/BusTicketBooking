package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 30, nullable = false)
	private String name;
	@Column(length = 30, nullable = false)
	private String email;
	@Column(length = 30, nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private SexType sex;
	@Column(nullable = false)
	private Long phone;
	@Column(length = 30, nullable = false)
	private String city;
	@Enumerated(EnumType.STRING)
	@Column(length = 30, nullable = false)
	private StateType state;
	@Column(nullable = false)
	private int pin;
	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private CustomerRoleType role;
	@JsonIgnore
	@OneToMany(mappedBy = "userId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Tickets> tickets = new ArrayList<Tickets>();

	@JsonIgnore
	@OneToMany(mappedBy = "userId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Contactus> feedbacks = new ArrayList<Contactus>();

	/*
	 * INSERT INTO User (name, email, password, sex, phone, city, state, pin, role)
	 * values ('SHWETA SAH', 'shweta@gmail.com', '1234', 'FEMALE', 8223087766,
	 * 'RAIPUR', 'CHHATTISGARH', 492015, 'ADMIN'); INSERT INTO User (name, email,
	 * password, sex, phone, city, state, pin, role) values ('ANJALI ROOPCHANDANI',
	 * 'anjali@gmail.com', '5678', 'FEMALE', 8103736765, 'DURG', 'CHHATTISGARH',
	 * 490006, 'CUSTOMER'); INSERT INTO User (name, email, password, sex, phone,
	 * city, state, pin, role) values ('RATNENDRA PRATAP SINGH',
	 * 'ratnendra@gmail.com', '5678', 'MALE', 7587042615, 'RAIPUR', 'CHHATTISGARH',
	 * 492001, 'CUSTOMER');
	 */

	public User() {
		System.out.println("in User");
	}

	public User(String name, String email, String password, SexType sex, Long phone, String city, StateType state,
			int pin, CustomerRoleType role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.sex = sex;
		this.phone = phone;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.role = role;
	}

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public User(String email, Long phone) {
		super();
		this.email = email;
		this.phone = phone;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name.toUpperCase().trim();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email.toLowerCase().trim();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password.trim();
	}

	public SexType getSex() {
		return sex;
	}

	public void setSex(SexType sex) {
		this.sex = sex;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city.toUpperCase().trim();
	}

	public StateType getState() {
		return state;
	}

	public void setState(StateType state) {
		this.state = state;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public CustomerRoleType getRole() {
		return role;
	}

	public void setRole(CustomerRoleType role) {
		this.role = role;
	}

	public List<Tickets> getTickets() {
		return tickets;
	}

	public void setTickets(List<Tickets> tickets) {
		this.tickets = tickets;
	}

	public void addTickets(Tickets tickets) {
		this.tickets.add(tickets);
		tickets.setUserId(this);
	}

	public void removeTickets(Tickets tickets) {
		this.tickets.remove(tickets);
		tickets.setUserId(null);
	}

	public List<Contactus> getFeedbacks() {
		return feedbacks;
	}

	public void setFeedbacks(List<Contactus> feedbacks) {
		this.feedbacks = feedbacks;
	}

	public void addFeedback(Contactus f) {
		this.feedbacks.add(f);
		f.setUserId(this);
	}

	public void removeFeedback(Contactus f) {
		this.feedbacks.remove(f);
		f.setUserId(null);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", sex=" + sex
				+ ", phone=" + phone + ", city=" + city + ", state=" + state + ", pin=" + pin + ", role=" + role + "]";
	}

}
