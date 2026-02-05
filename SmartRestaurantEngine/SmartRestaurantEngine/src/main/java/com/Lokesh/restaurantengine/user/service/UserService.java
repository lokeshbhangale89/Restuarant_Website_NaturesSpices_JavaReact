//package com.Lokesh.restaurantengine.user.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import com.Lokesh.restaurantengine.user.modal.User;
//import com.Lokesh.restaurantengine.user.repository.UserRepository;
//
//import java.util.Date;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    public User registerUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        user.setRole("user");
////        user.setCreatedAt(new Date().toInstant());
////        user.setUpdatedAt(new Date().toInstant());
//        return userRepository.save(user);
//    }
//}
//no use now, move all logic from controller to here later