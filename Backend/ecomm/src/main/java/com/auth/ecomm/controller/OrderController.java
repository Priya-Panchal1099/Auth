package com.auth.ecomm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.ecomm.model.Order;
import com.auth.ecomm.model.OrderRequest;
import com.auth.ecomm.model.ProductQuantity;
import com.auth.ecomm.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // ── Place an order (USER role) ──────────────────────────────
    // POST /orders/place
    // Body: { "userId": 1, "productId": 5, "quantity": 1 }
    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest request) {
        Order order = orderService.placeOrder(request);
        return ResponseEntity.ok(order);
    }

    // ── Get all orders for a specific user ───────────────────────
    // GET /orders/user/{userId}
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(orderService.getOrdersByUser(userId));
    }

    // ── Get ALL orders (ADMIN) ───────────────────────────────────
    // GET /orders/all
    @GetMapping("/all")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // ── Cancel an order (restores stock) ────────────────────────
    // PUT /orders/{orderId}/cancel
    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> cancelOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.cancelOrder(orderId));
    }

    // ── Stock management ─────────────────────────────────────────

    // GET /orders/stock/all  – list all product stock levels
    @GetMapping("/stock/all")
    public ResponseEntity<List<ProductQuantity>> getAllStock() {
        return ResponseEntity.ok(orderService.getAllStock());
    }

    // GET /orders/stock/{productId}  – stock for one product
    @GetMapping("/stock/{productId}")
    public ResponseEntity<ProductQuantity> getStock(@PathVariable Long productId) {
        return ResponseEntity.ok(orderService.getStockByProduct(productId));
    }

    // POST /orders/stock/set  – set/update stock for a product (ADMIN)
    // Body: { "productId": 5, "quantity": 100 }
    @PostMapping("/stock/set")
    public ResponseEntity<ProductQuantity> setStock(@RequestBody StockRequest req) {
        return ResponseEntity.ok(orderService.setStock(req.productId(), req.quantity()));
    }

    // Inner record for stock body
    public record StockRequest(Long productId, int quantity) {}
}
