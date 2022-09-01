import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css', './toast.component-media-queries.css']
})
export class ToastComponent {

  @Input()
  message: string = ''

  @Input()
  iconClass: string = ''

  @Input()
  iconColor: string = ''

  constructor() { }

}
