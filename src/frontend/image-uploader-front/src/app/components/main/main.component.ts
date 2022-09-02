import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageUploadService} from "../../services/image-upload-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  constructor(private httpClient: HttpClient, private imageUploadService: ImageUploadService) { }

  imgSta = this.imageUploadService.imgSta
  get imageStatus(): number { return this.imageUploadService.imageStatus }

}
