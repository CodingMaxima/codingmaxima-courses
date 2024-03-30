import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountprimesComponent } from './countprimes.component';

describe('CountprimesComponent', () => {
  let component: CountprimesComponent;
  let fixture: ComponentFixture<CountprimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountprimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountprimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
