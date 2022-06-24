import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadedSuccessfullyComponent } from './image-uploaded-successfully.component';

describe('ImageUploadedSuccessfullyComponent', () => {
  let component: ImageUploadedSuccessfullyComponent;
  let fixture: ComponentFixture<ImageUploadedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
