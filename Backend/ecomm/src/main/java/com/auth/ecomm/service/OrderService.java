package com.auth.ecomm.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.auth.ecomm.model.Order;
import com.auth.ecomm.model.OrderRequest;
import com.auth.ecomm.model.Product;
import com.auth.ecomm.model.ProductQuantity;
import com.auth.ecomm.model.User;
import com.auth.ecomm.repository.OrderRepository;
import com.auth.ecomm.repository.ProductQuantityRepository;
import com.auth.ecomm.repository.ProductRepository;
import com.auth.ecomm.repository.UserRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductQuantityRepository productQuantityRepository;

    // ─────────────────────────────────────────────────────────
    // PLACE ORDER
    // ─────────────────────────────────────────────────────────

    /**
     * Places an order for a product:
     *  1. Validates user, product, and quantity.
     *  2. Decrements stock in product_quantity by the requested amount.
     *  3. Persists the Order record.
     */
    @Transactional
    public Order placeOrder(OrderRequest request) {
        // Resolve user
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found: " + request.getUserId()));

        // Resolve product
        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found: " + request.getProductId()));

        int qty = request.getQuantity() <= 0 ? 1 : request.getQuantity();

        // Decrement stock — auto-create a default record (100 units) if none exists yet
        ProductQuantity stock = productQuantityRepository.findByProductId(product.getId())
                .orElseGet(() -> {
                    ProductQuantity newStock = new ProductQuantity(product, 100);
                    return productQuantityRepository.save(newStock);
                });

        if (stock.getQuantity() < qty) {
            throw new RuntimeException("Insufficient stock. Available: " + stock.getQuantity());
        }
        stock.setQuantity(stock.getQuantity() - qty);
        productQuantityRepository.save(stock);

        // Create and persist the order
        Order order = new Order();
        order.setUser(user);
        order.setProduct(product);
        order.setQuantity(qty);
        order.setTotalPrice(product.getPrice() * qty);
        order.setStatus(Order.OrderStatus.CONFIRMED);
        order.setOrderedAt(LocalDateTime.now());

        return orderRepository.save(order);
    }

    // ─────────────────────────────────────────────────────────
    // QUERIES
    // ─────────────────────────────────────────────────────────

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found: " + orderId));

        if (order.getStatus() == Order.OrderStatus.CANCELLED) {
            throw new RuntimeException("Order is already cancelled.");
        }

        // Restore stock
        ProductQuantity stock = productQuantityRepository.findByProductId(order.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Stock record not found"));

        stock.setQuantity(stock.getQuantity() + order.getQuantity());
        productQuantityRepository.save(stock);

        order.setStatus(Order.OrderStatus.CANCELLED);
        return orderRepository.save(order);
    }

    // ─────────────────────────────────────────────────────────
    // STOCK MANAGEMENT
    // ─────────────────────────────────────────────────────────

    /** Set or update stock for a product. */
    @Transactional
    public ProductQuantity setStock(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found: " + productId));

        ProductQuantity stock = productQuantityRepository.findByProductId(productId)
                .orElse(new ProductQuantity(product, 0));
        stock.setProduct(product);
        stock.setQuantity(quantity);
        return productQuantityRepository.save(stock);
    }

    public List<ProductQuantity> getAllStock() {
        return productQuantityRepository.findAll();
    }

    public ProductQuantity getStockByProduct(Long productId) {
        return productQuantityRepository.findByProductId(productId)
                .orElseThrow(() -> new RuntimeException("No stock record for product: " + productId));
    }
}
