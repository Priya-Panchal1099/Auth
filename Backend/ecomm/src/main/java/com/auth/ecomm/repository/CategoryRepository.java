package com.auth.ecomm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.ecomm.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long>{
    
}
