package com.elliot.imageuploader.config;

import com.amazonaws.auth.EnvironmentVariableCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonS3Config {

    @Value("${aws.s3.region.name}")
    private String regionName;


    @Bean
    public AmazonS3 getAmazonS3Client() {
        return AmazonS3ClientBuilder.standard()
                .withRegion(regionName)
                .withCredentials(new EnvironmentVariableCredentialsProvider())
                .build();
    }
}
