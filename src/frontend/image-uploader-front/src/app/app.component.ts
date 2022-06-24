import {Component, ViewChild} from '@angular/core';
import {AnchorDirective} from "./directives/anchor.directive";
import {ImageUploadComponent} from "./components/image-upload/image-upload.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AnchorDirective, {static: true}) anchor!: AnchorDirective

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.anchor.viewContainerRef;
    viewContainerRef.clear();

    const imageComp = viewContainerRef.createComponent(ImageUploadComponent);

  }
}
