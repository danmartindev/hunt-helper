import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentHeight;
  barHeight = '64px';

  @HostListener('window:scroll', ['$event'])
  doSomething(event){
    console.log("Scroll Event " + window.pageYOffset);
    console.log("CH " + this.currentHeight);
    if(window.pageYOffset >= 100){
      this.barHeight = '5px';
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
