import { Component } from '@angular/core';
import { FormControl, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CODES } from './models/country-codes';
import { Code } from './models/country-codes';
import { MONTHS } from './models/months';
import { Month } from './models/months';
import { NavElement } from './models/nav-element';
import { MaxDay } from './helpers/max-day.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clouds';

  codeList: Code[] = CODES;
  monthList: Month[] = MONTHS;

  submitted: boolean = false;
  showMonthAsNumber = false

  model: FormGroup;

  asideNavList: Array<NavElement> = [
    {
      name: "Test",
      active: false
    },
    {
      name: "Personal",
      active: true
    },
    {
      name: "Test 2",
      active: false
    },
  ]

  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.model = this.formBuilder.group({
      name: ["", Validators.required],
      areaCode: ["+48", Validators.required],
      tel: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      chess: ['false', Validators.required],
      day: [25, [Validators.required, Validators.min(1)]],
      month: [10, Validators.required],
      year: [2002, [Validators.required, Validators.min(1920), Validators.max(new Date().getFullYear())]],
    }, {
      validator: [MaxDay()]
    });
    this.montDataType();
  }

  montDataType() {
    if (window.innerWidth > 500){
      this.showMonthAsNumber = false
    } else {
      this.showMonthAsNumber = true
    }
  }

  get f() { 
    return this.model.controls; 
  }

  onSubmit() {

    this.submitted = true;

  }

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

  ifUnderAge(inputDay, inputMonth, inputYear){
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate(); 
      
      let calculatedAge = currentYear - inputYear;
  
      if (currentMonth < inputMonth - 1) {
          calculatedAge--;
      }
      if (inputMonth - 1 == currentMonth && currentDay < inputDay) {
          calculatedAge--;
      }
      if(calculatedAge < 18) {
          return true;
      } else {
        return false;
      }
    }
}