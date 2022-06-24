import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardAlertComponent } from './clipboard-alert.component';

describe('ClipboardAlertComponent', () => {
  let component: ClipboardAlertComponent;
  let fixture: ComponentFixture<ClipboardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
