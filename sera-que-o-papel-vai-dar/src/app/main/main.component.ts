import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  numPeople: number = 1;
  sheetsPerUse: number = 20;
  usesPerDay: number = 2;
  daysSurviving: number = 0;
  rolls: number = 10;
  sheetsPerRoll: number = 200;
  percentageSurviving: number = 0;
  quarentineDays: number = 14;
  showAdvancedOptions: boolean = false;
  resultHashtagMessage: string = '#seraqueopapelvaidar?';
  descricaoCorona: string = "'Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).'+/n+'Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.'+/n+'A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1...'";

  constructor() { }

  ngOnInit(): void {
    this.calculateDays();
  }

  calculateDays(){
    let totalUsedSheetsPerDay = (this.sheetsPerUse * this.usesPerDay * this.numPeople);
    let totalAvailableSheets = (this.rolls * this.sheetsPerRoll);
    this.daysSurviving = Math.floor(totalAvailableSheets / totalUsedSheetsPerDay);
    this.percentageSurviving = Math.floor((this.daysSurviving/this.quarentineDays)*100);
    switch(true) { 
      case (this.percentageSurviving<50): { 
        this.resultHashtagMessage= '#tonoaperto #seraqueopapelvaidar'; 
         break; 
      } 
      case (this.percentageSurviving<100): { 
        this.resultHashtagMessage= '#horadeeconomizar #seraqueopapelvaidar'; 
         break; 
      } 
      case (this.percentageSurviving<150): { 
        this.resultHashtagMessage= '#totranquilo #seraqueopapelvaidar'; 
         break; 
      } 
      case (this.percentageSurviving>=150): { 
        this.resultHashtagMessage= '#aquitasobrando #seraqueopapelvaidar'; 
         break; 
      } 
      default: { 
        this.resultHashtagMessage= '#seraqueopapelvaidar';  
         break; 
      } 
   } 
    

  }

  toggleAdvanced(){
  this.showAdvancedOptions = !(this.showAdvancedOptions);
  
  }

}