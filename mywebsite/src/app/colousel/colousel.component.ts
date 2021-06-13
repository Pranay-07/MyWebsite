import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-colousel',
  templateUrl: './colousel.component.html',
  styleUrls: ['./colousel.component.scss']
})
export class ColouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(true)
    $('#carousel').carousel();
  }

}
