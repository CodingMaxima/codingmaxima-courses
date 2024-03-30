import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseofarrayComponent } from './reverseofarray.component';

describe('ReverseofarrayComponent', () => {
  let component: ReverseofarrayComponent;
  let fixture: ComponentFixture<ReverseofarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseofarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseofarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
