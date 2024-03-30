import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffstringsComponent } from './diffstrings.component';

describe('DiffstringsComponent', () => {
  let component: DiffstringsComponent;
  let fixture: ComponentFixture<DiffstringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffstringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffstringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
