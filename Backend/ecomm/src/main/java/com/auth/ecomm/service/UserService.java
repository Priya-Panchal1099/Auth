package com.auth.ecomm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth.ecomm.model.User;
import com.auth.ecomm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

     @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User saveUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("User already exists with email: " + user.getEmail());
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            user.setRoles(user.getRoles()); // default role if none provided
        }
        return userRepository.save(user);
    }

    public List<User> getUser() {
       return userRepository.findAll();
    }
    
}
