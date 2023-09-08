import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesSectionComponent } from './dates-section.component';

describe('DatesSectionComponent', () => {
  let component: DatesSectionComponent;
  let fixture: ComponentFixture<DatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatesSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
