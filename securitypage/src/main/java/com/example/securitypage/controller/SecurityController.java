package com.example.securitypage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {
    
    @Autowired
    MongoTemplate mongoTemplate;
}
