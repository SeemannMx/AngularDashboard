export class List {
  text1: string;

  /**
   * provide text for list in html
   * @param {number} id
   * @returns {string}
   */
    getText(id:number): string{
      var result: string;

      switch(id){

        case 1:{
          // text1
          result = "includes data about population, labour force statistics, employment and unemployment";
          break;
        }

        case 2:{
          // text2
          result = "includes data about private,collective individual and total consumption of households and goverment";
          break;
        }

        case 3:{
          // text3
          result = "includes data about capital formation, net saving and consumption of fixed capital in total economy";
          break;
        }

        case 4:{
          // text4
          result = "includes data about domestic and final demand";
          break;
        }

        case 5:{
          // text5
          result = "includes data about net and gross national income";
          break;
        }

        case 6:{
          // text6
          result = "includes data about gdp at constant prices adJusted for the impact of terms of trade per head";
          break;
        }

        case 7:{
          // text7
          result = "includes data about nominal and real unit labour costs, total economy";
          break;
        }

        case 8:{
          // text8
          result = "includes data about net capital stocK at constant prices, total economy";
          break;
        }

        case 9:{
          // text9
          result = "includes data about goods, services and terms of trade";
          break;
        }

        case 10:{
          // text10
          result = "includes data about balances with the rest of the world, national accounts";
          break;
        }

        case 11:{
          // text11
          result = "includes data about foreign trade at current prices and shares in world trade";
          break;
        }

        case 12:{
          // text12
          result = "includes data about industrial production and costs per mainbranch";
          break;
        }

        case 13:{
          // text13
          result = "includes data about interest rates, exchange rates and purchasing power parities";
          break;
        }

        case 14:{
          // text14
          result = "includes data about revenue, expenditure and balances";
          break;
        }

        case 15:{
          // text15
          result = "includes data about revenue, expenditure and balances";
          break;
        }

        case 16:{
          // text16
          result = "includes data about revenue, expenditure and net lending";
          break;
        }

        case 17:{
          // text17
          result = "adjustment based on potential gdp and trend gdp";
          break;
        }

        case 18:{
          // text18
          result = "ESA 2010";
          break;
        }
      }

      return result;
  }

}


