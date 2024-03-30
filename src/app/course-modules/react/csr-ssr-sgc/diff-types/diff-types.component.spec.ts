import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffTypesComponent } from './diff-types.component';

describe('DiffTypesComponent', () => {
  let component: DiffTypesComponent;
  let fixture: ComponentFixture<DiffTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
