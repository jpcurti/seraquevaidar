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

  constructor() { }

  ngOnInit(): void {
    this.calculateDays();
  }

  calculateDays(){
    let totalUsedSheetsPerDay = (this.sheetsPerUse * this.usesPerDay * this.numPeople);
    let totalAvailableSheets = (this.rolls * this.sheetsPerRoll);
    this.daysSurviving = Math.floor(totalAvailableSheets / totalUsedSheetsPerDay);
    this.percentageSurviving = Math.floor((this.daysSurviving/this.quarentineDays)*100);
  }

  toggleAdvanced(){
  this.showAdvancedOptions = !(this.showAdvancedOptions);
  
  }

}