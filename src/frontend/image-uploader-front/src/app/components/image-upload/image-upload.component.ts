import {Component} from '@angular/core';
import {ImageUploadService} from "../../image-upload-service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css', 'image-upload.component-media-queries.css']
})
export class ImageUploadComponent{

  constructor(private imageUploadService: ImageUploadService) {
  }

  onFileInput(event: any) {
    this.imageUploadService.selectFile(event);
    this.imageUploadService.uploadFile();
  }


}
