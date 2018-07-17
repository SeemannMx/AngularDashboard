/**
 * init class shoul run shell scribt
 */
import {log} from "util";

export class initClass{

  public callShellScript():void{

      log("XXXX initClass start this.callShellScript");
      let require:any;

      // let cp = require("child_process");
      // let script = cp.exec('sh dashboardJumpStart.sh /Users/tkallinich/DashboardProject/');

      // run java jar to build database
      let shell = require('shelljs');
      shell.echo("jumpstart java dashboard to get data from https://ec.europa.eu");
      shell.exec('echo');
      shell.exec('java -jar /Users/tkallinich/DashboardProject/dashboard.jar');
      shell.exec('echo');
      shell.exec('echo  -e "\\033[0;32;5mfinished with Jumpstart\\033[0m"');

      log("XXXX initClass end this.callShellScript");


  }
}
