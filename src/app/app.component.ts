import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


import { NavElement } from './models/nav-element';
import { DayValue } from './helpers/day-value.validator';
import { UnderAge } from './helpers/under-age.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clouds';

  buttonText: string = 'continue'
  showSummaryText: boolean = false;

  submittedTest1: boolean = false;
  submittedPersonal: boolean = false;
  submittedTest2: boolean = false;

  test1: FormGroup;
  personal: FormGroup;
  test2: FormGroup;

  formResult: object = {};

  sectionListStatus: Array<NavElement> = [
    {
      name: "Test",
      active: true
    },
    {
      name: "Personal",
      active: false
    },
    {
      name: "Test 2",
      active: false
    },
  ]
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

    this.test1 = this.formBuilder.group({
      anything: ['', [Validators.required, Validators.minLength(3)]],
    })

    this.personal = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: this.formBuilder.group({
        areaCode: ["+48", Validators.required],
        tel: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
      }),
      chess: ['false', Validators.required],
      age: this.formBuilder.group({
        day: ['', Validators.required],
        month: [1, Validators.required],
        year: ['', [Validators.required, Validators.min(1920), Validators.max(new Date().getFullYear())]],
      }, {
        validator: [DayValue(), UnderAge()]
      }),
    });

    this.test2 = this.formBuilder.group({
      something: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  get test1Controls() { 
    return this.test1.controls; 
  }
  get personalControls() { 
    return this.personal.controls; 
  }
  get test2Controls() { 
    return this.test2.controls; 
  }

  onSubmitTest1(){
    this.submittedTest1 = true;
    this.submitSection(this.test1, 1);
  }
  
  onSubmitPersonal() {
    this.submittedPersonal = true;
    this.submitSection(this.personal, 2);
  }
  
  onSubmitTest2(){
    this.submittedTest2 = true;
    this.submitSection(this.test2, false);
  }

  submitSection(form, sectionNumber){
    if(form.valid){

      this.sectionListStatus.forEach(element => {
        element.active = false
      });

      this.formResult = Object.assign(this.formResult, form.value)
      
      if((this.sectionListStatus.length - 1) == sectionNumber){
        this.buttonText = "submit"
      }
      
      if (sectionNumber){
        this.sectionListStatus[sectionNumber].active = true
      } else {
        this.sectionListStatus.forEach(element => {
          element.active = false
        });
        this.showSummaryText = true;
        console.log(this.formResult);
      }

    }
  }
}