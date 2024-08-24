package com.app.controller;

import com.app.pojos.Payment;
import com.app.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        Payment payment = paymentService.findById(id);
        return payment != null ? ResponseEntity.ok(payment) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> payments = paymentService.findAll();
        return ResponseEntity.ok(payments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<List<Payment>> getPaymentsByUsername(@PathVariable String username) {
        List<Payment> payments = paymentService.findByUsername(username);
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/paymentType/{paymentType}")
    public ResponseEntity<List<Payment>> getPaymentsByPaymentType(@PathVariable String paymentType) {
        List<Payment> payments = paymentService.findByPaymentType(paymentType);
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/amountGreaterThan/{amount}")
    public ResponseEntity<List<Payment>> getPaymentsByTotalAmountGreaterThan(@PathVariable BigDecimal amount) {
        List<Payment> payments = paymentService.findByTotalAmountGreaterThan(amount);
        return ResponseEntity.ok(payments);
    }

    @PostMapping
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok(savedPayment);
    }

    // Add more endpoint methods as needed
}
