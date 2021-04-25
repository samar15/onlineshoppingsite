package com.example.onlineshoppingsite.models.mysql;

import com.example.onlineshoppingsite.enums.ROLE;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "user")

//Database - User Table's columns and it's attributes

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private ROLE role;

    @Column(name = "mobile_number")
    private Long mobileNumber;

    @Column(name = "is_active")
    private Boolean isActive;

}