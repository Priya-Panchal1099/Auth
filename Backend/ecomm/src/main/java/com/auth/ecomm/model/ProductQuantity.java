package com.auth.ecomm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "product_quantity")
@Getter
@Setter
@NoArgsConstructor
public class ProductQuantity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false, unique = true)
    private Product product;

    private int quantity; // available stock

    public ProductQuantity(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    /**
     * Decrements quantity by 1. Returns false if already zero.
     */
    public boolean decrementStock() {
        if (this.quantity <= 0) return false;
        this.quantity--;
        return true;
    }
}
