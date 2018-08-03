import {Component, OnInit} from '@angular/core';
import {log} from "util";
import {List} from "./Modules/List";
import {HttpClient} from "@angular/common/http";

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
  card2Text:String;
  card3Text:String;
  card4Text:String;
  card5Text:String;
  card6Text:String;

  // List Details ss
  list: List;
  text1:String;
  text2:String;
  text3:String;
  text4:String;
  text5:String;
  text6:String;
  text7:String;
  text8:String;
  text9:String;
  text10:String;
  text11:String;
  text12:String;
  text13:String;
  text14:String;
  text15:String;
  text16:String;
  text17:String;
  text18:String;

  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  ngOnInit(){

    // get data from assets folder data.json
    this.http.get('http://localhost:4200/assets/test.json')
      .subscribe(data => {
        console.log(data);

        // convert data
        var dataToString = JSON.stringify(data);
        var stringToJson = JSON.parse(dataToString);

        var population = stringToJson.data[0].Ameco01[0].population;
        console.log("Ameco01 populataion: " + population);

        var totalLaborForce = stringToJson.data[0].Ameco01[1].totalLaborForce;
        console.log("Ameco01 total labor force" + totalLaborForce);

        var income = stringToJson.data[4].Ameco05[0].income;
        console.log("Ameco05 income " + income);

        var savings = stringToJson.data[2].Ameco03[0].savings;
        console.log("Ameco03 saving " + savings);

        var intrest = stringToJson.data[11].Ameco13[3].realLongIntrest;
        console.log("Ameco13 real instrest long " + intrest);

        // govermentDept
        var dept = stringToJson.data[15].Ameco18[0].govermentDept;
        console.log("Ameco18 goverment dept " + dept);

        // set data value in component variable
        this.card1Text = population + "000 persons";
        this.card2Text = savings + " Mrd. €";
        this.card3Text = totalLaborForce + "000 persons";
        this.card4Text = intrest + " %";
        this.card5Text = income  + " Mrd. €";
        this.card6Text = dept + " Mrd. €";

      });
  }

  constructor(private http: HttpClient) {
    log("app compo constructor, start hello ");

    this.setText();
    this.run();
  }

  // fill list with details
  private setText(){
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

  public run(){

    // build fuison charts https://www.fusioncharts.com/dev/

    var getInnerWidth = window.innerWidth / 1.45;
    console.log("inner width: " + getInnerWidth);
    var getInnerHight = window.outerHeight / 2;
    console.log("outer height: " + getInnerHight);

    this.width = getInnerWidth
    this.height = getInnerHight;

    // build diagramms
    console.log("start buildDiagramm 1");

    this.dataSource = {
      "chart": {
        "caption": "Corporate Tax",
        "subCaption": "",
        "numbersuffix": " Mio. € ",
        "theme": "fint"
      },
      "data": [
        {
          "label": "2008",
          "value": "880.000.000"
        },
        {
          "label": "2010",
          "value": "730.000.000"
        },
        {
          "label": "2012",
          "value": "690.000.000"
        },
        {
          "label": "2014",
          "value": "600.000.000"
        },
        {
          "label": "2016",
          "value": "600.000.000"
        },
        {
          "label": "2018",
          "value": "540.000.000"
        }
      ]
    }

    console.log("end buildDiagramm 1");

  }


}
