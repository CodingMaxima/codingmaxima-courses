import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercoinsComponent } from './numbercoins.component';

describe('NumbercoinsComponent', () => {
  let component: NumbercoinsComponent;
  let fixture: ComponentFixture<NumbercoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbercoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
