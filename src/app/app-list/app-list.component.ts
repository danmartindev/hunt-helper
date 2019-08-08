import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface JobApp {
  dateOfApp: Date;
  company: string;
  position: string;
  location: string;
  status: string;
}

const APP_DATA: JobApp[] = [
  {dateOfApp: new Date('May 1, 2019'), company: 'IBM', position: 'Front End Dev', location: 'Raleigh', status:'Pending'},
  {dateOfApp: new Date('May 2, 2019'), company: 'eBM', position: 'Front End ', location: 'Raleigh', status:'Pending'},
  {dateOfApp: new Date('May 3, 2019'), company: 'vBM', position: 'Front', location: 'Raleigh', status:'Pending'},

];

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  appColumns: string[] = ['dateOfApp', 'company', 'position', 'location', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  appDataSource = new MatTableDataSource(APP_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.appDataSource.sort = this.sort;

  }

}
