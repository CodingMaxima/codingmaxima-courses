import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindkeypositionsComponent } from './findkeypositions.component';

describe('FindkeypositionsComponent', () => {
  let component: FindkeypositionsComponent;
  let fixture: ComponentFixture<FindkeypositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindkeypositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindkeypositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
