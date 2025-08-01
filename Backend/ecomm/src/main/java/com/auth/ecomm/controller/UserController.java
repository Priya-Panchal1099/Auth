package com.auth.ecomm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.auth.ecomm.model.User;
import com.auth.ecomm.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@PreAuthorize("hasRole('USER')")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/register")
    public ResponseEntity<User> addUsers(@RequestBody User user) {
        User saveUser = userService.saveUser(user);
        // userService.generateAndSendOtp(user.getEmail());
        return ResponseEntity.ok(saveUser);
    }
    


    @GetMapping("/getUser/{role}")
    public ResponseEntity<List<User>> getUserByRole(@PathVariable String role) {
         List<User> user = userService.getUserByRole(role);
        return ResponseEntity.ok(user);       
    }
    
    //  @PostMapping("/verify-otp")
    //  public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
    //      boolean isVerified = userService.verifyOtp(email, otp);
    //      return isVerified 
    //          ? ResponseEntity.ok("OTP verified successfully.")
    //          : ResponseEntity.status(400).body("Invalid OTP.");
    //  }
      
}
