import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatecharsComponent } from './duplicatechars.component';

describe('DuplicatecharsComponent', () => {
  let component: DuplicatecharsComponent;
  let fixture: ComponentFixture<DuplicatecharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicatecharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatecharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
