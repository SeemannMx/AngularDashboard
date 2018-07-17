import { Component, OnInit } from '@angular/core';
import { initClass } from "../initRunner/initClass";


@Component({
  selector: 'app-initializer',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.css']
})
export class InitializerComponent implements OnInit {

  initialRunner: initClass = {
    id: 1,
    name: "T.K."
  };

  constructor() {

  }

  ngOnInit() {
    // init logic, on init of component
  }

}
