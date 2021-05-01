package com.example.onlineshoppingsite.configurations;

import com.example.onlineshoppingsite.models.mysql.User;
import com.example.onlineshoppingsite.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public  UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
        User user =userRepository.getUserByUserName(userName);
        if(null == user) {
            throw new UsernameNotFoundException("Not found: " + userName);
        }
        return new MyUserDetails(user);
    }
}
