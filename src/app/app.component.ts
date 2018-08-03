import {Component, OnInit} from '@angular/core';
import {log} from "util";
import {List} from "./Modules/List";
import {HttpClient} from "@angular/common/http";
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

  card1Text:String;

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

    // get data from assets folder data.json
    this.http.get('http://localhost:4200/assets/test.json')
      .subscribe(data => {
        console.log(data);

        // convert data
        var dataToString = JSON.stringify(data);
        var stringToJson = JSON.parse(dataToString);

        // var value1 = stringToJson.ameco01.population[0];
        // var value1 = stringToJson.Ameco01[0].population;

        var value1 = stringToJson.data[0].Ameco01[0].population;
        console.log("Ameco01 populataion: " + value1);

        var value2 = stringToJson.data[0].Ameco01[1].totalLaborForce;
        console.log("Ameco01 total labor force" + value2);

        var value3 = stringToJson.data[4].Ameco05[0].income;
        console.log("Ameco05 income " + value3);

        var value4 = stringToJson.data[2].Ameco03[0].savings;
        console.log("Ameco03 saving " + value4);

        var value5 = stringToJson.data[11].Ameco13[3].realLongIntrest;
        console.log("Ameco13 real instrest long " + value5);

        // govermentDept
        var value6 = stringToJson.data[15].Ameco18[0].govermentDept;
        console.log("Ameco18 goverment dept " + value6);

        // set data value in component variable
        // console.log("Test Ameco01 " + value1);
        this.card1Text = value1;

      });


  }

  constructor(private http: HttpClient) {
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
