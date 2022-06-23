package com.elliot.imageuploader.service.implementation;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
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
import java.util.Objects;
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

    @Override
    @Async
    public void uploadImage(final MultipartFile file) {
        File fileToUpload = convertToFile(file);

        UUID uuid = UUID.randomUUID();
        String fileName = "photo-" +  uuid + "." + fileToUpload.getName().split("\\.")[1];

        PutObjectRequest objectRequest = new PutObjectRequest(s3BucketName, fileName, fileToUpload);
        s3Client.putObject(objectRequest);

        try {
            Files.delete(fileToUpload.toPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        log.info("File uploaded! Name: " + fileName);
    }

    @Override
    @Async
    public CompletableFuture<S3ObjectInputStream> getImage(String imageName) {
        log.info("Fetching file: " + imageName);
        return CompletableFuture.completedFuture(s3Client.getObject(s3BucketName, imageName).getObjectContent());
    }

    private File convertToFile(final MultipartFile multipartFile)  {
        File converted = new File("./images/" + Objects.requireNonNull(multipartFile.getOriginalFilename()));

        try (FileOutputStream outputStream = new FileOutputStream(converted)){
            outputStream.write(multipartFile.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        log.info("Uploading with file name: " + converted.getAbsolutePath());

        return converted;
    }
}
