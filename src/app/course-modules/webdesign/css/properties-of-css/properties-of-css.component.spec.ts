import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesOfCSSComponent } from './properties-of-css.component';

describe('PropertiesOfCSSComponent', () => {
  let component: PropertiesOfCSSComponent;
  let fixture: ComponentFixture<PropertiesOfCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesOfCSSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesOfCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
