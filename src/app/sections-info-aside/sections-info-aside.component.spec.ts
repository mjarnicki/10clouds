import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsInfoAsideComponent } from './sections-info-aside.component';

describe('SectionsInfoAsideComponent', () => {
  let component: SectionsInfoAsideComponent;
  let fixture: ComponentFixture<SectionsInfoAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsInfoAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsInfoAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
