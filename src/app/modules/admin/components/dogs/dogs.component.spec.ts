import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogsComponent } from './dogs.component';
import { of } from 'rxjs'; // Import of from 'rxjs' for mocking observables
import { DogService } from '../../services/dog.service';
import { DogResponse } from './dog-response.type';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  const response: DogResponse = {
    message: 'https://images.dog.ceo/breeds/mastiff-bull/02108422_4375.jpg',
    status: 'success'
  };

  const dogServiceMock = {
    getDog: () => of(response)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogsComponent],
      providers: [{ provide: DogService, useValue: dogServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
