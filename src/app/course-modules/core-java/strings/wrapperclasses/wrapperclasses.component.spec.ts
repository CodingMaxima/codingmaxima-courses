import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperclassesComponent } from './wrapperclasses.component';

describe('WrapperclassesComponent', () => {
  let component: WrapperclassesComponent;
  let fixture: ComponentFixture<WrapperclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperclassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
