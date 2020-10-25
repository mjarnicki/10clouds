import { Component } from '@angular/core';
import { FormControl, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CODES } from './models/country-codes';
import { Code } from './models/country-codes';
import { MONTHS } from './models/months';
import { Month } from './models/months';
import { MaxDay } from './helpers/max-day.validator';
import { OfAge } from './helpers/of-age.validator';

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

  model: FormGroup;

 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      name: ["", Validators.required],
      areaCode: ["+48", Validators.required],
      tel: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      chess: ['false', Validators.required],
      day: [1, [Validators.required, Validators.min(1)]],
      month: [1, Validators.required],
      year: [2000, [Validators.required, Validators.min(1920), Validators.max(new Date().getFullYear())]],
    }, {
      validator: [MaxDay(), OfAge()]
    });
  }

  get f() { 
    this.model.controls['day'].updateValueAndValidity();
    return this.model.controls; 
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.model.value);
        // stop here if form is invalid
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
}