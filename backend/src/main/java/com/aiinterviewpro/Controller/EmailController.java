package com.aiinterviewpro.Controller;

import com.aiinterviewpro.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/send-mail")
    public String sendMail() {
        // Replace with actual email, subject, and body
        String to = "test@example.com";
        String subject = "OTP Code";
        String body = "Your OTP is 123456";

        emailService.sendAdminEmail(to, "Approval status", "We glad to inform that your college was approved and enjoy the prep Ai");
        emailService.sendOtpEmail(to, subject, body);

        return "Email sent successfully.";
    }
}

