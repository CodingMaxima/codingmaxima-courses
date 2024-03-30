import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDatatypesComponent } from './free-datatypes.component';

describe('FreeDatatypesComponent', () => {
  let component: FreeDatatypesComponent;
  let fixture: ComponentFixture<FreeDatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDatatypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
