import { Component } from '@angular/core';
import { initClass } from "./runner/initClass";
import {log} from "util";
import {ChildProcessService} from "ngx-childprocess";

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

  ngOnInit(){
    this.callShellScript();
  }

  constructor() {
    log("app compo constructor");


  }

  callShellScript(){

    log("initClass start this.callShellScript");
    let require:any;

    // run java jar to build database
    let shell = require('shelljs');
    shell.echo("jumpstart java dashboard to get data from https://ec.europa.eu");
    shell.exec('echo');
    shell.exec('java -jar /Users/tkallinich/DashboardProject/dashboard.jar');
    shell.exec('echo');
    shell.exec('echo  -e "\\033[0;32;5mfinished with Jumpstart\\033[0m"');

    log("initClass end this.callShellScript");

  }

}
