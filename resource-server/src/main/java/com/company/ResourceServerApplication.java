package com.company;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableResourceServer
public class ResourceServerApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResourceServerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ResourceServerApplication.class, args);
        LOGGER.info("ResourceServerApplication works !");
    }
}
