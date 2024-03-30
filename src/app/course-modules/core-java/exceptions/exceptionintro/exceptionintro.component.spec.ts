import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionintroComponent } from './exceptionintro.component';

describe('ExceptionintroComponent', () => {
  let component: ExceptionintroComponent;
  let fixture: ComponentFixture<ExceptionintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
