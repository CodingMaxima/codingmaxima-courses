import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthmaticComponent } from './arthmatic.component';

describe('ArthmaticComponent', () => {
  let component: ArthmaticComponent;
  let fixture: ComponentFixture<ArthmaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthmaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthmaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
