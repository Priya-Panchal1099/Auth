package com.auth.ecomm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.ecomm.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    /** All orders placed by a specific user */
    List<Order> findByUserId(Long userId);

    /** All orders for a specific product */
    List<Order> findByProductId(Long productId);
}
