import { Component, OnInit, HostListener } from '@angular/core';
import { navAnim } from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    navAnim
  ]
})
export class NavbarComponent implements OnInit {

  scroll = false;
  navState = '*';
  timeout;
  currentYOff = 0;

  @HostListener('document:mousemove', ['$event']) 
  showNav(e) {
    if(e.clientY < 65) {
      this.navState = '*';
    }
  }

  @HostListener('window:scroll', ['$event'])
  hideNav(event){
    console.log("scrolling");
    this.scroll = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("done scrolling");
      if(window.pageYOffset > 100 && Math.abs(window.pageYOffset - this.currentYOff) >= 100){
        this.navState = 'hidden';
      } else {
        this.navState = '*';
      }
    }, 10);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
