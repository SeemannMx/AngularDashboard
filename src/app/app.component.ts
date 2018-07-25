import { Component  } from '@angular/core';
import { log        } from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // declaration of variables
  title = 'Dashboard';
  details = 'Details';

  ngOnInit(){
  }

  constructor() {
    log("app compo constructor");
  }

}
