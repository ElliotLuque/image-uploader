import {Component, ViewChild} from '@angular/core';
import {ImageUploadService} from "../../services/image-upload-service";
import {ViewRefDirective} from "../../directives/view-ref/view-ref.directive";
import {ToastComponent} from "../alerts/toast/toast.component";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css', 'image-upload.component-media-queries.css']
})
export class ImageUploadComponent{

  constructor(private imageUploadService: ImageUploadService) { }

  @ViewChild(ViewRefDirective) private viewChild!: ViewRefDirective

  imageFile!: File
  subscription!: Subscription


  onFileInput(event: any) {
    this.imageFile = event.target.files[0]
    this.uploadFile()
  }

  fileDropped(file: File) {
    this.imageFile = file
    this.uploadFile()
  }

  uploadFile = () => {
    const upload$ = this.imageUploadService.addImage(this.imageFile);
    this.subscription = upload$
      .subscribe({
        next: data => {
          this.imageUploadService.imageStatus = this.imageUploadService.imgSta.Loading
          this.imageUploadService.imageURL = Object.values(data)[4]
          // 700-450ms for rendering uploaded successfully page
          interval(Math.random() * (700 - 450) + 450).subscribe( () => this.imageUploadService.imageStatus = this.imageUploadService.imgSta.Uploaded )
        },
        error: () => { this.generateToast() }
      })
  }

  generateToast = () => {
    const componentRef = this.viewChild.viewContainerRef.createComponent<any>(ToastComponent)

    componentRef.instance.iconColor = "var(--red1)"
    componentRef.instance.iconClass = "fa-solid fa-xmark"
    componentRef.instance.message = "File uploaded should be an image (jpg, png, svg, ...)"

    interval(2300).subscribe(() => componentRef.destroy())
  }
}
