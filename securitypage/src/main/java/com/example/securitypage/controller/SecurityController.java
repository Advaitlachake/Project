package com.example.securitypage.controller;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class SecurityController {
    @Autowired
    MongoTemplate mongoTemplate;

    private ConcurrentMap<String, String> otpAuthMap = new ConcurrentHashMap<>();

    @PostMapping(value="/setCredentials", consumes = { MediaType.APPLICATION_JSON_VALUE }, produces = {
        MediaType.APPLICATION_JSON_VALUE })
        public String storeCredentials(@RequestBody String details) {
            JSONObject request = new JSONObject(details);
            mongoTemplate.insert(request, "User");
            return "";

}
}