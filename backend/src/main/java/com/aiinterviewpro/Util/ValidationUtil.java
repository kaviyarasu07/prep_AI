package com.aiinterviewpro.Util;

import java.util.regex.Pattern;

public class ValidationUtil {

    private static final Pattern MOBILE_PATTERN = Pattern.compile("^(\\+91|0)?[6-9]\\d{9}$");
    private static final Pattern LANDLINE_PATTERN = Pattern.compile("^0\\d{2,4}-?\\d{6,8}$");
    private static final Pattern WEBSITE_PATTERN = Pattern.compile("^(https?://)?(www\\.)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(/\\S*)?$");
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

    public static boolean isValidMobile(String phone) {
        return phone != null && MOBILE_PATTERN.matcher(phone).matches();
    }

    public static boolean isValidLandline(String phone) {
        return phone != null && LANDLINE_PATTERN.matcher(phone).matches();
    }

    public static boolean isValidWebsite(String website) {
        return website != null && WEBSITE_PATTERN.matcher(website).matches();
    }

    public static boolean isValidPhone(String phone) {
        return isValidMobile(phone) || isValidLandline(phone);
    }

    public static boolean isValidEmail(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    public static boolean isValidPassword(String password) {
        return password != null && password.length() >= 10;
    }
}
