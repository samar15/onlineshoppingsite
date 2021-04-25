package com.example.onlineshoppingsite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.shoppingSite.repository")
@SpringBootApplication
public class OnlineshoppingsiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineshoppingsiteApplication.class, args);
    }

}
