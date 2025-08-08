package com.auth.ecomm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.auth.ecomm.model.Product;
import com.auth.ecomm.model.Subcategory;
import com.auth.ecomm.repository.ProductRepository;
import com.auth.ecomm.repository.SubcategoryRepository;
import com.auth.ecomm.service.ProductService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired 
    ProductRepository productRepository;

    @Autowired
    SubcategoryRepository subcategoryRepository;

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @PostMapping("/create")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProdutcById(@PathVariable Long id) {
        return productService.getProdutcById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        return ResponseEntity.ok(updatedProduct);
    }

    @GetMapping("/search")
    public List<Product> searchProduct(@RequestParam String name) {
        return productService.searchProduct(name);
    }

     @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        List<Subcategory> subcategories = subcategoryRepository.findByCategoryId(categoryId);
        List<Product> products = new ArrayList<>();
        for (Subcategory subcategory : subcategories) {
            products.addAll(productRepository.findBySubcategoryId(subcategory.getId()));
        }
        return products;
    }
}
