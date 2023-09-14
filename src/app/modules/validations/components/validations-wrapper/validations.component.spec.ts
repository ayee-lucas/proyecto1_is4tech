import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsWrapperComponent } from './validations-wrapper.component';

describe('ValidationsWrapperComponent', () => {
  let component: ValidationsWrapperComponent;
  let fixture: ComponentFixture<ValidationsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationsWrapperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
