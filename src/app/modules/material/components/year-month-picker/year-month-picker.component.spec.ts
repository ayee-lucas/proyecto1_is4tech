import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthPickerComponent } from './year-month-picker.component';

describe('YearMonthPickerComponent', () => {
  let component: YearMonthPickerComponent;
  let fixture: ComponentFixture<YearMonthPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMonthPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
