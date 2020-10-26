import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { MONTHS } from '../../models/months';
import { Month } from '../../models/months';

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss']
})
export class AgeInputComponent {

  constructor(public controlContainer: ControlContainer) { }
  
  monthList: Month[] = MONTHS;
  showMonthAsNumber:boolean = false;

  @Input() label: string;
  @Input() invalidMessage: string;
  @Input() submitted: boolean;
  @Input() form: any;
  @Input() formControlNameCode: string;

  checkMonthLength(day: number, month: number, year: number) {

    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
      if(day > 29 && month === 2){
        return true
      }
    }
    else {
      if(day > 28 && month === 2){
        return true
      }
    }

    if(day > 30 && (month === 4 || month === 6 || month === 9 || month === 11)){
      return true
    }

    if(day > 31){
      return true
    }
  }

    montDataType() {
      if (window.innerWidth > 500){
        this.showMonthAsNumber = false
      } else {
        this.showMonthAsNumber = true
      }
    }

}
