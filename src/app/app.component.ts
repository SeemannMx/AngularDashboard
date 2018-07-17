import { Component } from '@angular/core';
import {initClass} from "./initRunner/initClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  initialRunner: initClass = {
    id: 1,
    name: "T.K."
  };
}
