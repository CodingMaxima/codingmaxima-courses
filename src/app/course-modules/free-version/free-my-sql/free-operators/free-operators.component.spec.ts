import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeOperatorsComponent } from './free-operators.component';

describe('FreeOperatorsComponent', () => {
  let component: FreeOperatorsComponent;
  let fixture: ComponentFixture<FreeOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
