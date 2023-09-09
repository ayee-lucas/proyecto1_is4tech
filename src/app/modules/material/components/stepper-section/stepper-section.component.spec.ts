import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSectionComponent } from './stepper-section.component';

describe('StepperSectionComponent', () => {
  let component: StepperSectionComponent;
  let fixture: ComponentFixture<StepperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
