import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot-projects',
  templateUrl: './iot-projects.component.html',
  styleUrls: ['./iot-projects.component.scss']
})
export class IotProjectsComponent implements OnInit {
  show: boolean=false;
  buttonText: string="Show Code";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.show=!this.show;
    if(this.show){
      this.buttonText="hide code";
    }
    else this.buttonText="show code"
  }
}
