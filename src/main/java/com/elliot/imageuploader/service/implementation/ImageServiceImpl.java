package com.elliot.imageuploader.service.implementation;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.elliot.imageuploader.entity.Image;
import com.elliot.imageuploader.exception.ImageNotFoundException;
import com.elliot.imageuploader.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

@RequiredArgsConstructor
@Service
@Slf4j
public class ImageServiceImpl implements ImageService
{
    private final AmazonS3 s3Client;

    @Value("${aws.s3.bucket.name}")
    private String s3BucketName;

    /**
     * Upload an image to AWS S3 Storage*/
    @Override
    @Async
    public void uploadImage(MultipartFile file) {
        File fileToUpload = convertToFile(file);

        UUID uuid = UUID.randomUUID();
        String fileName = "photo-" +  uuid + "." + fileToUpload.getName().split("\\.")[1];

        PutObjectRequest objectRequest = new PutObjectRequest(s3BucketName, fileName, fileToUpload);
        s3Client.putObject(objectRequest);

        try {
            Files.delete(fileToUpload.toPath());
        } catch (IOException e) {
            throw new RuntimeException("File " + fileToUpload.toPath() + " could not be deleted...");
        }

        log.info("File uploaded! Name: " + fileName);
    }

    /**
     * Retrieve an image by his name in AWS S3 Storage*/
    @Override
    @Async
    public CompletableFuture<Image> findImageByName(String imageName) {
        log.info("Fetching file: " + imageName);
        try {
            S3ObjectInputStream imageBytes = s3Client.getObject(s3BucketName, imageName).getObjectContent();
            Image image = new Image(imageName, imageBytes);

            return CompletableFuture.completedFuture(image);

        } catch (AmazonS3Exception e) {
            throw new ImageNotFoundException("Image with name " + imageName + " not found...");
        }
    }

    /**
     * Returns a File converted from MultipartFile*/
    private File convertToFile(MultipartFile multipartFile)  {
        File converted = new File("images/" + multipartFile.getOriginalFilename());

        try (FileOutputStream outputStream = new FileOutputStream(converted)){
            outputStream.write(multipartFile.getBytes());
        } catch (IOException e) {
            throw new RuntimeException("Multipart file could not be converted to File...");
        }

        log.info("Uploading to S3 with file path: " + converted.getAbsolutePath());

        return converted;
    }
}
