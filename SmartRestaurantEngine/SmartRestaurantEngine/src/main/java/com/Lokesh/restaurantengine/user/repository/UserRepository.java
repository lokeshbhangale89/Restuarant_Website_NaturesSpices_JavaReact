package com.Lokesh.restaurantengine.user.repository;

import com.Lokesh.restaurantengine.user.modal.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
