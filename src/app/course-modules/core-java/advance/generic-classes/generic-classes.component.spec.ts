import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericClassesComponent } from './generic-classes.component';

describe('GenericClassesComponent', () => {
  let component: GenericClassesComponent;
  let fixture: ComponentFixture<GenericClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
