import { Component } from '@angular/core';
import { initClass } from "./runner/initClass";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // declaration of variables
  title = 'Dashboard';

  // declaration of objects
  public xInitial:initClass;

  constructor() {

  }

  // call shell scribt in init class
  callInitClass(){
    this.xInitial = new initClass();
    this.xInitial.callShellScript();
  }

}
