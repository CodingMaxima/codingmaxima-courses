import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdesgmngComponent } from './empdesgmng.component';

describe('EmpdesgmngComponent', () => {
  let component: EmpdesgmngComponent;
  let fixture: ComponentFixture<EmpdesgmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdesgmngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdesgmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
