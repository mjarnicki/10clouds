import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { CODES } from './models/country-codes';
import { Code } from './models/country-codes';
import { MONTHS } from './models/months';
import { Month } from './models/months';

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

  model: Partial<any>;

  ngOnInit(): void {
    this.model = {
      name: 'Ma',
      areaCode: "+48",
      tel: '55555',
      chess: 'false',
      day: 44,
      month: 1,
      year: 2000,
    };
  }

  submit(form: NgForm) {
    this.submitted = true;
    if(form.valid){
      console.log('formularz jest ok, teraz sprawdź datę');
    }
  }

  dayLimit = new FormControl("", [Validators.max(100), Validators.min(0)])

  checkMonthLength(day, month, year) {

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

  characterLimit(event, limit){
    if(event.target.value.length > limit -1 ) {
      event.target.value = event.target.value.slice(0, (limit - 1))
    }
  }

}
