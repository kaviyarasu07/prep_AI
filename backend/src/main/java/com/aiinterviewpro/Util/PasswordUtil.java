package com.aiinterviewpro.Util;

import java.security.SecureRandom;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class PasswordUtil {
    public static String generateTemporaryPassword(int length) {
        String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lower = "abcdefghijklmnopqrstuvwxyz";
        String digits = "0123456789";
        String special = "@#$%!";

        String combined = upper + lower + digits + special;
        StringBuilder tempPassword = new StringBuilder();
        SecureRandom rand = new SecureRandom();

        for (int i = 0; i < length; i++) {
            tempPassword.append(combined.charAt(rand.nextInt(combined.length())));
        }

        return tempPassword.toString();
    }
}
