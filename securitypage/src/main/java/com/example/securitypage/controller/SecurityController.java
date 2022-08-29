package com.example.securitypage.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.apache.catalina.User;
//import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
public class SecurityController {
    @Autowired
    MongoTemplate mongoTemplate;

    private Map<String, String> otpAuthMap = new HashMap<>();

    @PostMapping(value="/setCredentials", consumes = { MediaType.ALL_VALUE }, produces = {
        MediaType.APPLICATION_JSON_VALUE })
        public String storeCredentials(@RequestBody String details) {
            System.out.print(details);
            //JSONObject request = new JSONObject(details);
            mongoTemplate.insert(details, "User");
            return details;

}

   /**
 * @param email
 * @param password
 * @return
 */
@GetMapping(value="/getCredentials/{email}/{password}",produces = {
  MediaType.APPLICATION_JSON_VALUE })
  @ResponseBody()
    public boolean verifyCredentials(@PathVariable String email, @PathVariable String password)
      {   
       // JSONObject result = new JSONObject(); // Creating a new JSON

        //result.put("emailid", email);
       
        //result.put("password", password);
       // otpAuthMap.put(email, password);
        //return result.toString();
        //Map.Entry<String,String> entry = otpAuthMap.entrySet().iterator().next();
         
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email)).addCriteria(Criteria.where("password").is(password));

        if(mongoTemplate.exists(query, "User"))
        {
          System.out.println("Success");
                return true;
        }
        System.out.println("Faliure");
        return false;
        
      }
   
}