package com.elliot.imageuploader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class ImageUploaderApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImageUploaderApplication.class, args);
    }

}
