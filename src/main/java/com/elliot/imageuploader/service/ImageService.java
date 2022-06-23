package com.elliot.imageuploader.service;

import com.amazonaws.services.s3.model.S3ObjectInputStream;
import org.springframework.web.multipart.MultipartFile;

import java.util.concurrent.CompletableFuture;

public interface ImageService {
    void uploadImage(MultipartFile imageFile);
    CompletableFuture<S3ObjectInputStream> getImage(String imageName);
}
