import { Component  } from '@angular/core';
import { log        } from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // declaration of variables
  title = 'Economic Dashboard';
  version = 'Version 0.1';

  ngOnInit(){
  }

  constructor() {
    log("app compo constructor");
  }

}
