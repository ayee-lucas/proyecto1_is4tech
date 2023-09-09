import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { slideInAnimation } from 'src/animations';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  animations: [slideInAnimation]
})
export class WrapperComponent implements OnInit {
  links = [
    {
      title: 'Start',
      path: '/material'
    },
    {
      title: 'Date Pickers',
      path: '/material/date-pickers'
    },
    {
      title: 'Dialog - Table',
      path: '/material/dialog-table'
    }
  ];
  activeLink = '';

  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {
    this.activeLink = this.router.url;
  }

  getRouteAnimationsData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
