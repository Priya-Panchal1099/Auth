package com.auth.ecomm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
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


@RestController
@PreAuthorize("hasRole('USER')")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/add")
    public ResponseEntity<User> addUsers(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }
    
    @GetMapping("/getUser")
    public List<User> getUsers() {
        return userService.getUser();
    }

    
      
}
