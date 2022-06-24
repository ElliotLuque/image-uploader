import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAlertComponent } from './file-alert.component';

describe('FileAlertComponent', () => {
  let component: FileAlertComponent;
  let fixture: ComponentFixture<FileAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
