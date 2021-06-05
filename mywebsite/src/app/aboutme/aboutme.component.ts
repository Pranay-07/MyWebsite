import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  public show=false;
  constructor() {
    this.show=false;
   }

  ngOnInit(): void {
  }

  toggle(){
    this.show=!this.show;
  }
}
