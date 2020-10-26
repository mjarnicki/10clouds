import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})
export class RadioInputComponent {

  @Input() label: string;
  @Input() formControlName: string;

}
