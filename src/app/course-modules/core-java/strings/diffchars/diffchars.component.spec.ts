import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffcharsComponent } from './diffchars.component';

describe('DiffcharsComponent', () => {
  let component: DiffcharsComponent;
  let fixture: ComponentFixture<DiffcharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffcharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffcharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
