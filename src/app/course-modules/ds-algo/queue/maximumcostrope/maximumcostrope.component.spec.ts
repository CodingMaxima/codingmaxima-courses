import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumcostropeComponent } from './maximumcostrope.component';

describe('MaximumcostropeComponent', () => {
  let component: MaximumcostropeComponent;
  let fixture: ComponentFixture<MaximumcostropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumcostropeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximumcostropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
