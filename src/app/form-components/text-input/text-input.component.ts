import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})

// COMMENT:
// This component is most universal, so i put all element to variable in order to configure them from higher level.

export class TextInputComponent {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() invalidMessage: string;
  @Input() submitted: boolean;
  @Input() form: any;
  @Input() formControlName: string;

  formControlText: any;
  
  ngOnInit(){
    this.formControlText = this.form[this.formControlName]; 
  }
  
}
