import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-info-aside',
  templateUrl: './sections-info-aside.component.html',
  styleUrls: ['./sections-info-aside.component.scss']
})
export class SectionsInfoAsideComponent {

  @Input() sectionListStatus;

}
