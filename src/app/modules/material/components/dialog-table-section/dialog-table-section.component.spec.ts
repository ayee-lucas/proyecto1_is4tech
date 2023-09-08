import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTableSectionComponent } from './dialog-table-section.component';

describe('DialogTableSectionComponent', () => {
  let component: DialogTableSectionComponent;
  let fixture: ComponentFixture<DialogTableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTableSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
