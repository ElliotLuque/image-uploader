import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageUploadService} from "./services/image-upload-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "image-uploader-front";
  constructor(private httpClient: HttpClient, private imageUploadService: ImageUploadService) { }

  imgSta = this.imageUploadService.imgSta
  get imageStatus(): number { return this.imageUploadService.imageStatus }

}
