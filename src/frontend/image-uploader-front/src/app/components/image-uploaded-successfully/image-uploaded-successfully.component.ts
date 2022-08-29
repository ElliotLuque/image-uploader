import { Component, OnInit } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {ImageUploadService} from "../../services/image-upload-service";

@Component({
  selector: 'app-uploaded-successfully',
  templateUrl: './image-uploaded-successfully.component.html',
  styleUrls: ['./image-uploaded-successfully.component.css', './image-uploaded-successfully.component-media-queries.css']
})
export class ImageUploadedSuccessfullyComponent implements OnInit {

  link: string = this.imageUploadService.sourceImage;

  constructor(private clipboard: Clipboard, private imageUploadService: ImageUploadService) { }

  ngOnInit(): void {
  }

  copyToClipboard(link: string) {
    this.clipboard.copy(link);
  }

}
