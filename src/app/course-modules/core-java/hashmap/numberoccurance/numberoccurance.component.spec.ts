import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberoccuranceComponent } from './numberoccurance.component';

describe('NumberoccuranceComponent', () => {
  let component: NumberoccuranceComponent;
  let fixture: ComponentFixture<NumberoccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberoccuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberoccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
