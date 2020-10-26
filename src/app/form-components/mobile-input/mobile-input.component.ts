import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CODES } from '../../models/country-codes';
import { Code } from '../../models/country-codes';

@Component({
  selector: 'app-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.scss'],
})
export class MobileInputComponent {

  constructor(public controlContainer: ControlContainer) {}

  codeList: Code[] = CODES;

  @Input() label: string;
  @Input() invalidMessage: string;
  @Input() submitted: boolean;
  @Input() form: any;

}
