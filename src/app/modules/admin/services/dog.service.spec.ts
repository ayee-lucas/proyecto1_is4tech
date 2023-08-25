import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DogResponse } from '../components/dogs/dog-response.type';

import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const response: DogResponse = {
    message: 'https://images.dog.ceo/breeds/mastiff-bull/02108422_4375.jpg',
    status: 'success'
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDog()', () => {
    it('should return a message and status', () => {
      httpClientSpy.get.and.returnValue(of(response));
      service.getDog().subscribe({
        next: dog => {
          expect(dog).toEqual(response);
        },
        error: err => {
          console.log(err);
        }
      });
      expect(httpClientSpy.get).toHaveBeenCalled();
    });
  });
});
