import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { TodoComponent } from '../todo/todo.component';
import { AppListComponent } from '../app-list/app-list.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  elements = [
    'list',
    'todo'
  ];

  elTest = [
    TodoComponent,
    AppListComponent
  ];


  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    // moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
    moveItemInArray(this.elTest, event.previousIndex, event.currentIndex);

    console.log(this.elTest);
  }

  ngOnInit() {
  }

}
