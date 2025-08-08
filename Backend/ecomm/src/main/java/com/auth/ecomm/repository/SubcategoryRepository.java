package com.auth.ecomm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.ecomm.model.Subcategory;

@Repository
public interface SubcategoryRepository extends JpaRepository<Subcategory,Long>{
     List<Subcategory> findByCategoryId(Long categoryId);
}
