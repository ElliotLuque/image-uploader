package com.elliot.imageuploader.service;

import com.elliot.imageuploader.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.util.concurrent.CompletableFuture;

public interface ImageService {
    CompletableFuture<Image> uploadImage(MultipartFile imageFile);
    CompletableFuture<Image> findImageByName(String imageName);
}
