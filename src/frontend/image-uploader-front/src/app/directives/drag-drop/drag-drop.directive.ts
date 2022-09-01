import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @HostBinding('class.fileover') fileOver: boolean | undefined
  @Output() fileDropped = new EventEmitter<File>();

  constructor() { }

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

    const file = evt.dataTransfer.files[0]
    this.fileDropped.emit(file)
  }
}
