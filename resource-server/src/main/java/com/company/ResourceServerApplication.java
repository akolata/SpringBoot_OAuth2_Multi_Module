package com.company;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ResourceServerApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResourceServerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ResourceServerApplication.class, args);
        LOGGER.info("ResourceServerApplication works !");
    }
}
