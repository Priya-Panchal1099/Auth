package com.auth.ecomm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.auth.ecomm.exception.CustomAccessDeniedException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/getAdmin")
    public ResponseEntity<String> getAdminDetails() throws CustomAccessDeniedException {
        String role = getCurrentUserRole(); 
        if (role == null || !role.equals("ADMIN")) {
            throw new CustomAccessDeniedException("You do not have permission to access this resource");
        }
        return ResponseEntity.ok().body("Admin details accessed successfully");
    }

    private String getCurrentUserRole() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .findFirst()
                .map(authority -> authority.getAuthority())
                .orElse(null);
    }

}
