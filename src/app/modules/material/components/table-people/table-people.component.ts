import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export type Person = {
  id: number;
  name: string;
  age: number;
};

const people: Person[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 28 },
  { id: 5, name: 'Eva', age: 22 },
  { id: 6, name: 'Frank', age: 40 },
  { id: 7, name: 'Grace', age: 33 },
  { id: 8, name: 'Hannah', age: 29 },
  { id: 9, name: 'Ian', age: 27 },
  { id: 10, name: 'Jessica', age: 31 },
  { id: 11, name: 'Katie', age: 26 },
  { id: 12, name: 'Liam', age: 24 }
];

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.scss']
})
export class TablePeopleComponent implements AfterViewInit {
  tableColumns = ['id', 'name', 'age'];
  tableSource = new MatTableDataSource<Person>(people);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @ViewChild(MatSort) sort: MatSort | null = null;

  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableSource.filter = filterValue.trim().toLowerCase();
    this.tableSource.filterPredicate = function (
      data,
      filter: string
    ): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }
}
