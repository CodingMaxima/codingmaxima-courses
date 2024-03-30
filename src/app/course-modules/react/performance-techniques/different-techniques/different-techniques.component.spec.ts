import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentTechniquesComponent } from './different-techniques.component';

describe('DifferentTechniquesComponent', () => {
  let component: DifferentTechniquesComponent;
  let fixture: ComponentFixture<DifferentTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
