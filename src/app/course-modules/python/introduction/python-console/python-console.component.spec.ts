import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonConsoleComponent } from './python-console.component';

describe('PythonConsoleComponent', () => {
  let component: PythonConsoleComponent;
  let fixture: ComponentFixture<PythonConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
