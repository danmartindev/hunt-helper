import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //@ViewChild('myLock', {static: false}) myLock: ElementRef;

  elements = [
    {name: "blech"},
  ];

  myelems;


  toShift;
  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // you'll get your through 'elements' below code
    this.myelems = this.elem.nativeElement.querySelectorAll('.snapper');
    console.log(this.myelems);
  }

  events: string[] = [];
  opened: boolean;

  createEle(){
    this.elements.push({name:"newBtn"});
  }

  getLoc(event){
    this.toShift=event.target;
    console.log(event.target.getBoundingClientRect());
    // this.myelems.forEach(el => {
    //   console.log(el.offsetX);
    // });
    //console.log(this.myLock);

    //offsetLeft 8
    //offsetHeight 18
    //offsetTop: 635
    //offsetWidth: 302
  }

  shift(){
    console.log(this.toShift.getBoundingClientRect().x);
    console.log("shifting");
    this.toShift.getBoundingClientRect().x = this.toShift.getBoundingClientRect().x + 50; 
    console.log(this.toShift.getBoundingClientRect().x);

  }
}
