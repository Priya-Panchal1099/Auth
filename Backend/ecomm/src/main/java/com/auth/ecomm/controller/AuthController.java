package com.auth.ecomm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.auth.ecomm.security.jwt.JwtUtils;
import com.auth.ecomm.service.UserService;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.security.core.Authentication;


@RestController
@RequestMapping("/auth")
public class AuthController {

    
    @Autowired
    AuthenticationManager authenticationManager;

     @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        Authentication authentication= (Authentication) authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                credentials.get("email"), credentials.get("password")
            )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails=userDetailsService.loadUserByUsername(credentials.get("email"));
        String token = jwtUtils.generateToken(userDetails);
        return Map.of("token", token);
    }

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String,String> emailReq) {
        String email = emailReq.get("email");
        userService.generateAndSendOtp(email);
        return ResponseEntity.ok("OTP sent to " + email);
 
    }
    
    
}
