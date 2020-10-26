import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './helpers/phone-mask.directive';
import { TextInputComponent } from './form-components/text-input/text-input.component';
import { RadioInputComponent } from './form-components/radio-input/radio-input.component';
import { MobileInputComponent } from './form-components/mobile-input/mobile-input.component';
import { AgeInputComponent } from './form-components/age-input/age-input.component';
import { SectionsInfoAsideComponent } from './sections-info-aside/sections-info-aside.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    TextInputComponent,
    RadioInputComponent,
    MobileInputComponent,
    AgeInputComponent,
    SectionsInfoAsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
