import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDrillingComponent } from './prop-drilling.component';

describe('PropDrillingComponent', () => {
  let component: PropDrillingComponent;
  let fixture: ComponentFixture<PropDrillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropDrillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropDrillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
