import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxsubarraysumComponent } from './maxsubarraysum.component';

describe('MaxsubarraysumComponent', () => {
  let component: MaxsubarraysumComponent;
  let fixture: ComponentFixture<MaxsubarraysumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxsubarraysumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxsubarraysumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
