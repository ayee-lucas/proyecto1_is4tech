import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  links = [
    {
      title: 'Start',
      path: '/material'
    },
    {
      title: 'Dialog - Table',
      path: '/material/dialog-table'
    },
    {
      title: 'Date Pickers',
      path: '/material/date-pickers'
    }
  ];
  activeLink = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeLink = this.router.url;
  }
}
