package com.elliot.imageuploader.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class UploadResponse {
    private int status;
    private LocalDateTime timestamp;
    private String message;
    private String filename;
    private String imageURL;
}
