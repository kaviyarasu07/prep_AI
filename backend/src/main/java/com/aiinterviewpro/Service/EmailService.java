package com.aiinterviewpro.Service;

import com.aiinterviewpro.Config.MailSenderProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private MailSenderProperties senderProperties;

    public void sendOtpEmail(String to, String subject, String body) {
        sendEmail(to, subject, body, senderProperties.getOtp());
    }

    public void sendAdminEmail(String to, String subject, String body) {
        sendEmail(to, subject, body, senderProperties.getAdmin());
    }

    private void sendEmail(String to, String subject, String body, String from) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}