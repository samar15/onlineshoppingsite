package com.example.onlineshoppingsite.repositories;

import com.example.onlineshoppingsite.models.mysql.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User , Integer> {
    User getUserByUserName(String userName);
}
