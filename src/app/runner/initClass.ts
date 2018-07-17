/**
 * init class shoul run shell scribt
 */
export class initClass{

  id: number;
  name: string;

  public callShellScript():void{

    this.id = 2;
    console.log("id changed to " + this.id);
  }
}
