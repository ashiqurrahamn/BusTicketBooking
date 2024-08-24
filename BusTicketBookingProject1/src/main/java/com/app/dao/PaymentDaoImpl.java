package com.app.dao;

import com.app.pojos.Payment;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public class PaymentDaoImpl implements PaymentDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Payment findById(Long id) {
        return entityManager.find(Payment.class, id);
    }

    @Override
    public List<Payment> findAll() {
        String jpql = "SELECT p FROM Payment p";
        TypedQuery<Payment> query = entityManager.createQuery(jpql, Payment.class);
        return query.getResultList();
    }

    @Override
    public Payment save(Payment payment) {
        if (payment.getId() == null) {
            entityManager.persist(payment);
            return payment;
        } else {
            return entityManager.merge(payment);
        }
    }

    @Override
    public void delete(Payment payment) {
        entityManager.remove(payment);
    }

    @Override
    public List<Payment> findByUsername(String username) {
        String jpql = "SELECT p FROM Payment p WHERE p.username = :username";
        TypedQuery<Payment> query = entityManager.createQuery(jpql, Payment.class);
        query.setParameter("username", username);
        return query.getResultList();
    }

    @Override
    public List<Payment> findByPaymentType(String paymentType) {
        String jpql = "SELECT p FROM Payment p WHERE p.paymentType = :paymentType";
        TypedQuery<Payment> query = entityManager.createQuery(jpql, Payment.class);
        query.setParameter("paymentType", paymentType);
        return query.getResultList();
    }

    @Override
    public List<Payment> findByTotalAmountGreaterThan(BigDecimal amount) {
        String jpql = "SELECT p FROM Payment p WHERE p.totalAmount > :amount";
        TypedQuery<Payment> query = entityManager.createQuery(jpql, Payment.class);
        query.setParameter("amount", amount);
        return query.getResultList();
    }

    // Add more custom query methods as needed

}
