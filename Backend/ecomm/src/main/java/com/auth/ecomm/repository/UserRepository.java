package com.auth.ecomm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.ecomm.model.User;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    List<User> findByRoles(String roles);
    
}
