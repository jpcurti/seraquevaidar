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
        this.resultHashtagMessage= '#tonoaperto #seraqueopapelvaidar?'; 
         break; 
      } 
      case (this.percentageSurviving<100): { 
        this.resultHashtagMessage= '#horadeeconomizar #seraqueopapelvaidar?'; 
         break; 
      } 
      case (this.percentageSurviving<150): { 
        this.resultHashtagMessage= '#totranquilo #seraqueopapelvaidar?'; 
         break; 
      } 
      case (this.percentageSurviving>=150): { 
        this.resultHashtagMessage= '#aquitasobrando #seraqueopapelvaidar?'; 
         break; 
      } 
      default: { 
        this.resultHashtagMessage= '#seraqueopapelvaidar?';  
         break; 
      } 
   } 
    

  }

  toggleAdvanced(){
  this.showAdvancedOptions = !(this.showAdvancedOptions);
  
  }

}