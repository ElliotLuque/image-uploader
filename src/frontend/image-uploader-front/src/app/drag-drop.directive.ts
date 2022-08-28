import {Directive, HostBinding, HostListener} from '@angular/core';
import {ImageUploadService} from "./image-upload-service";

@Directive({
  selector: '[DragDrop]'
})
export class DragDropDirective {

  @HostBinding('class.fileover') fileOver: boolean | undefined
  fileDropped!: File

  constructor(private imageUploadService: ImageUploadService) { }

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault()
    evt.stopPropagation()

    this.fileOver = true
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault()
    evt.stopPropagation()

    this.fileOver = false

    const files = evt.dataTransfer.files

    if (files.length > 0) {
      this.fileDropped = files[0]
      this.imageUploadService.selectFileDragDrop(evt)
      this.imageUploadService.uploadFile()
    }
  }

}
