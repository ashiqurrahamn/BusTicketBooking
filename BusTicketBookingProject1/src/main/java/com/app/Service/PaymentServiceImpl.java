package com.app.Service;

import com.app.dao.PaymentDao;
import com.app.pojos.Payment;
import com.app.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    private final PaymentDao paymentDao;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentDao paymentDao) {
        this.paymentDao = paymentDao;
    }

    @Override
    public Payment findById(Long id) {
        return paymentDao.findById(id);
    }

    @Override
    public List<Payment> findAll() {
        return paymentDao.findAll();
    }

    @Override
    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public void deletePayment(Long id) {
        Payment payment = paymentDao.findById(id);
        if (payment != null) {
            paymentDao.delete(payment);
        }
    }

    @Override
    public List<Payment> findByUsername(String username) {
        return paymentDao.findByUsername(username);
    }

    @Override
    public List<Payment> findByPaymentType(String paymentType) {
        return paymentDao.findByPaymentType(paymentType);
    }

    @Override
    public List<Payment> findByTotalAmountGreaterThan(BigDecimal amount) {
        return paymentDao.findByTotalAmountGreaterThan(amount);
    }

    // Add more service methods as needed
}
