import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberofpairsComponent } from './numberofpairs.component';

describe('NumberofpairsComponent', () => {
  let component: NumberofpairsComponent;
  let fixture: ComponentFixture<NumberofpairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberofpairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberofpairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
