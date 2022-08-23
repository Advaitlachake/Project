package com.example.securitypage.config;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

    @Configuration
    public class MongoConfig extends AbstractMongoClientConfiguration {

        @Value("${mongo.url}")
        private String mongoUrl;

        @Override
        protected String getDatabaseName() {
            return "LandSPage";
        }

        @Override
        public MongoClient mongoClient() {
            ConnectionString connectionString = new ConnectionString(mongoUrl);
            MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
                    .applyConnectionString(connectionString)
                    .build();

            return MongoClients.create(mongoClientSettings);
        }
    }


