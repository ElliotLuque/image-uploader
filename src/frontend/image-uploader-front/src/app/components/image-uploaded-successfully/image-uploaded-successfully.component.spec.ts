import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadedSuccessfullyComponent } from './image-uploaded-successfully.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ImageUploadedSuccessfullyComponent', () => {
  let component: ImageUploadedSuccessfullyComponent;
  let fixture: ComponentFixture<ImageUploadedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ImageUploadedSuccessfullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploadedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
