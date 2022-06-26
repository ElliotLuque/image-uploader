package com.elliot.imageuploader.entity;

import com.amazonaws.services.s3.model.S3ObjectInputStream;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class Image {
    @NonNull private String imageName;
    private S3ObjectInputStream imageBytes;
}
