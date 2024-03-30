import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonNumberComponent } from './neon-number.component';

describe('NeonNumberComponent', () => {
  let component: NeonNumberComponent;
  let fixture: ComponentFixture<NeonNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
