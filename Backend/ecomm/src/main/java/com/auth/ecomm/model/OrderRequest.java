package com.auth.ecomm.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Request body sent from the frontend when a user places an order.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

    private Long userId;
    private Long productId;
    private int  quantity; // how many units (defaults to 1 if omitted)
}
