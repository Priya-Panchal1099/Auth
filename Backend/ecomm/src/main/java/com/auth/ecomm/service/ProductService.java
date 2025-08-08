package com.auth.ecomm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.auth.ecomm.model.Product;
import com.auth.ecomm.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public ResponseEntity<Product> getProdutcById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Id not Found"));
        return ResponseEntity.ok(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Long id, Product product) {
        Product productData = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("user id not found"));
        // productData.setName(product.getName());
        // productData.setDescription(product.getDescription());
        // productData.setPrice(product.getPrice());
        // productData.setSubcategory(product.getSubcategory());
        return productRepository.save(productData);
    }

    public List<Product> searchProduct(String name) {
       return productRepository.findByNameContaining(name);
    }



}
