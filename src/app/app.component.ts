import { Component } from '@angular/core';
import { initClass } from "./runner/initClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dashboard';

  constructor() {

    var obj = new initClass();
    obj.id = 0;
    obj.name = "t.k."
    obj.callShellScript();

  }



}
