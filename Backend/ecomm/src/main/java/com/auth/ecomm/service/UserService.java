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
    
    // @Autowired
    // private OtpService otpService; // Assuming you have an OtpService for OTP generation

    // @Autowired
    // private EmailService emailService; // Assuming you have an EmailService for sending emails

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

    public List<User> getUserByRole(String role) {
        List<User> users = userRepository.findByRoles(role);
        if (users == null || users.isEmpty()) {
            throw new RuntimeException("No users found with role: " + role);
        }
        return users;
    }

    // public void generateAndSendOtp(String email) {
    //     User user=new User();
    //     String otp = otpService.generateOtp(email);
    //     user.setOtp(otp);
    //     emailService.sendOtpEmail(email, otp);
    // }

    // public boolean verifyOtp(String email, String otp) {
    //     return otpService.verifyOtp(email, otp);
    // }
    
}
