import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageLoadingComponent } from './components/image-loading/image-loading.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageUploadedSuccessfullyComponent } from './components/image-uploaded-successfully/image-uploaded-successfully.component';
import { ClipboardAlertComponent } from './components/alerts/clipboard-alert/clipboard-alert.component';
import { FileAlertComponent } from './components/alerts/file-alert/file-alert.component';
import {HttpClientModule} from "@angular/common/http";
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ImageLoadingComponent,
    ImageUploadComponent,
    ImageUploadedSuccessfullyComponent,
    ClipboardAlertComponent,
    FileAlertComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
