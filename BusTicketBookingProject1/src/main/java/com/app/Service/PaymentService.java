package com.app.Service;

import com.app.pojos.Payment;

import java.math.BigDecimal;
import java.util.List;

public interface PaymentService {

    Payment findById(Long id);

    List<Payment> findAll();

    Payment savePayment(Payment payment);

    void deletePayment(Long id);

    List<Payment> findByUsername(String username);

    List<Payment> findByPaymentType(String paymentType);

    List<Payment> findByTotalAmountGreaterThan(BigDecimal amount);

    // Add more service methods as needed
}
