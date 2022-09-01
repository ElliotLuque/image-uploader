import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadingComponent } from './image-loading.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ImageLoadingComponent', () => {
  let component: ImageLoadingComponent;
  let fixture: ComponentFixture<ImageLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ImageLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
