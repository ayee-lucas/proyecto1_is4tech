// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  message?: string;
  status: boolean = false;
  textAreaVal: string = 'Type Something';
  textToTrim: string = 'Porfin hoy es viernes';

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDog();
  }

  getDog() {
    this.dogService.getDog().subscribe(res => {
      if (res.status !== 'success') {
        this.status = false;
        return;
      }

      this.message = res.message;
      this.status = true;
    });
  }
}
