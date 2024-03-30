import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdatabaseComponent } from './selectdatabase.component';

describe('SelectdatabaseComponent', () => {
  let component: SelectdatabaseComponent;
  let fixture: ComponentFixture<SelectdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectdatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
