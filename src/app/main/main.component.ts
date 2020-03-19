import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  numPeople: number = 2;
  sheetsPerUse: number = 20;
  usesPerDay: number = 2;
  daysSurviving: number = 0;
  rolls: number = 16;
  sheetsPerRoll: number = 200;

  constructor() { }

  ngOnInit(): void {
    this.calculateDays();
  }

  calculateDays(){
    let totalUsedSheetsPerDay = (this.sheetsPerUse * this.usesPerDay * this.numPeople);
    let totalAvailableSheets = (this.rolls * this.sheetsPerRoll);
    this.daysSurviving = Math.floor(totalAvailableSheets / totalUsedSheetsPerDay);
  }

}
