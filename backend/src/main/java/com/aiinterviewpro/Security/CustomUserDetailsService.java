package com.aiinterviewpro.Security;



import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Repository.LoginRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final LoginRepo loginRepo;

    public CustomUserDetailsService(LoginRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Login login = loginRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return org.springframework.security.core.userdetails.User.builder()
                .username(login.getEmail())
                .password(login.getPassword())
                .roles(login.getRole().getName())
                .build();
    }
}