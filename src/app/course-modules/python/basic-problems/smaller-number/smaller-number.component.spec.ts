import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerNumberComponent } from './smaller-number.component';

describe('SmallerNumberComponent', () => {
  let component: SmallerNumberComponent;
  let fixture: ComponentFixture<SmallerNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallerNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
