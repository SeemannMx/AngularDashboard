import {Component, OnInit} from '@angular/core';
import { log        } from "util";
import {List} from "./Modules/List";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import * as url from "url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // declaration of variables
  title = 'Economic Dashboard';
  version = 'Version 0.1';
  creator = 'Tino Kallinich';

  // List Details ss
  list: List;
  text1;
  text2;
  text3;
  text4;
  text5;
  text6;
  text7;
  text8;
  text9;
  text10;
  text11;
  text12;
  text13;
  text14;
  text15;
  text16;
  text17;
  text18;


  ngOnInit(){

    var url= 'https://github.com/SeemannMx/rest_ameco_01/blob/master/db.json';

    // make rest request
    this.httpClient.get(url).subscribe((data) => {
      console.log(data);
    })
  }

  constructor(private httpClient: HttpClient) {
    log("app compo constructor, start hello ");

    this.setText();

  }

  // fill list with details
  setText(){
    this.list = new List();

    this.text1 =  this.list.getText(1);
    this.text2 =  this.list.getText(2);
    this.text3 =  this.list.getText(3);
    this.text4 =  this.list.getText(4);
    this.text5 =  this.list.getText(5);
    this.text6 =  this.list.getText(6);
    this.text7 =  this.list.getText(7);
    this.text8 =  this.list.getText(8);
    this.text9 =  this.list.getText(9);
    this.text10 =  this.list.getText(10);
    this.text11 =  this.list.getText(11);
    this.text12 =  this.list.getText(12);
    this.text13 =  this.list.getText(13);
    this.text14 =  this.list.getText(14);
    this.text15 =  this.list.getText(15);
    this.text16 =  this.list.getText(16);
    this.text17 =  this.list.getText(17);
    this.text18 =  this.list.getText(18);
  }
}
