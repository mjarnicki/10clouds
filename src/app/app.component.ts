import { Component } from '@angular/core';
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

}