import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDatabaseComponent } from './free-database.component';

describe('FreeDatabaseComponent', () => {
  let component: FreeDatabaseComponent;
  let fixture: ComponentFixture<FreeDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
