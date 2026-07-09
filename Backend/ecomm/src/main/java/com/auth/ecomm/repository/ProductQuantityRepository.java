package com.auth.ecomm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.ecomm.model.ProductQuantity;

@Repository
public interface ProductQuantityRepository extends JpaRepository<ProductQuantity, Long> {

    Optional<ProductQuantity> findByProductId(Long productId);
}
