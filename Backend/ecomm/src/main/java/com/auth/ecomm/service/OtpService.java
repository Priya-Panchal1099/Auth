package com.auth.ecomm.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class OtpService {
     private Map<String, String> otpStore = new HashMap<>();

    public String generateOtp(String email) {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        otpStore.put(email, String.valueOf(otp));
        return String.valueOf(otp);
    }

    public boolean verifyOtp(String email, String otp) {
        String storedOtp = otpStore.get(email);
        return storedOtp != null && storedOtp.equals(otp);
    }
}
