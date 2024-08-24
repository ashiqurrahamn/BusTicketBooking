package com.app.dao;

import com.app.pojos.Payment;

import java.math.BigDecimal;
import java.util.List;

public interface PaymentDao {

    Payment findById(Long id);

    List<Payment> findAll();

    Payment save(Payment payment);

    void delete(Payment payment);

    List<Payment> findByUsername(String username);

    List<Payment> findByPaymentType(String paymentType);

    List<Payment> findByTotalAmountGreaterThan(BigDecimal amount);

    // Add more custom query methods as needed
}
