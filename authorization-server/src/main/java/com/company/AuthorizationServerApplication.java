package com.company;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthorizationServerApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthorizationServerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(AuthorizationServerApplication.class, args);
        LOGGER.info("AuthorizationServerApplication works !");
    }
}
