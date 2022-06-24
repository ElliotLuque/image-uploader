import { Component, OnInit } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-uploaded-successfully',
  templateUrl: './image-uploaded-successfully.component.html',
  styleUrls: ['./image-uploaded-successfully.component.css', './image-uploaded-successfully.component-media-queries.css']
})
export class ImageUploadedSuccessfullyComponent implements OnInit {

  sourceImage: String = 'https://raw.githubusercontent.com/ElliotLuque/arch-purple-mountain-theme/main/config-files/.wallpapers/wallpaper-mousepad.jpg';
  link: string = 'https://image-uploader-elliot.s3.eu-west-3.amazonaws.com/photo-0ca76e92-92d9-4b1d-a058-7b14ea4144d2.jpg';

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyToClipboard(link: string) {
    this.clipboard.copy(link);
  }

}
