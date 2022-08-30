import {Component, ViewChild} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {ImageUploadService} from "../../services/image-upload-service";
import {ViewRefDirective} from "../../directives/view-ref/view-ref.directive";
import {ToastComponent} from "../alerts/toast/toast.component";
import {interval} from "rxjs";

@Component({
  selector: 'uploaded-successfully',
  templateUrl: './image-uploaded-successfully.component.html',
  styleUrls: ['./image-uploaded-successfully.component.css', './image-uploaded-successfully.component-media-queries.css']
})
export class ImageUploadedSuccessfullyComponent {

  constructor(private clipboard: Clipboard, private imageUploadService: ImageUploadService) { }

  @ViewChild(ViewRefDirective) viewChild!: ViewRefDirective
  link: string = this.imageUploadService.imageURL;

  copyToClipboard(link: string) {
    this.clipboard.copy(link)
    this.generateToast()
  }

  generateToast = () => {
    const componentRef = this.viewChild.viewContainerRef.createComponent<any>(ToastComponent)

    componentRef.instance.iconColor = "var(--green1)"
    componentRef.instance.iconClass = "fa-solid fa-circle-check"
    componentRef.instance.message = "Copied to clipboard!"

    interval(2300).subscribe(() => componentRef.destroy())
  }
}
