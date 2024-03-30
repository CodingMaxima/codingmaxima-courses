import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiognalsumComponent } from './diognalsum.component';

describe('DiognalsumComponent', () => {
  let component: DiognalsumComponent;
  let fixture: ComponentFixture<DiognalsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiognalsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiognalsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
