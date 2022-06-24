package com.elliot.imageuploader.controller;

import com.elliot.imageuploader.entity.Image;
import com.elliot.imageuploader.entity.UploadResponse;
import com.elliot.imageuploader.service.implementation.ImageServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@RestController
@RequiredArgsConstructor
public class ImageRestController {
    private final ImageServiceImpl imageService;

    @PostMapping("/upload")
    public ResponseEntity<Object> uploadImage(@RequestParam("imageFile") MultipartFile imageFile) {
        imageService.uploadImage(imageFile);
        UploadResponse response = new UploadResponse(imageFile.getOriginalFilename(), "Image uploaded successfully!", HttpStatus.CREATED.value(), LocalDateTime.now());
        return new ResponseEntity<>(response,HttpStatus.CREATED);

    }

    @GetMapping(value= "/image/{imageName}", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
    public ResponseEntity<Resource> getObject(@PathVariable("imageName") String imageName) throws ExecutionException, InterruptedException {
        CompletableFuture<Image> image = imageService.findImageByName(imageName);
        return ResponseEntity
                .ok()
                .cacheControl(CacheControl.noCache())
                .body(new InputStreamResource(image.get().getImageBytes()));
    }

}
