package com.aiinterviewpro.Util;

import java.util.regex.Pattern;

public class ValidationUtil {
    public static boolean isValidMobile(String phone) {
        return phone != null && phone.matches("^(\\+91|0)?[6-9]\\d{9}$");
    }

    public static boolean isValidLandline(String phone) {
        return phone != null && phone.matches("^0\\d{2,4}-?\\d{6,8}$");
    }

    public static boolean isValidWebsite(String website) {
        if (website == null) return false;
        return website.matches("^(https?://)?(www\\.)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(/\\S*)?$");
    }
    public static boolean isValidPhone(String phone) {
        return isValidMobile(phone) || isValidLandline(phone);
    }
    public static boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        return email != null && email.matches(emailRegex);
    }


    public static boolean isValidPassword(String password) {
        return password != null && password.length() >= 10;
    }
}
