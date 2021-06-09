import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cppprojects',
  templateUrl: './cppprojects.component.html',
  styleUrls: ['./cppprojects.component.scss']
})
export class CppprojectsComponent implements OnInit {
  show=false;
  buttonText="Show code"
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
