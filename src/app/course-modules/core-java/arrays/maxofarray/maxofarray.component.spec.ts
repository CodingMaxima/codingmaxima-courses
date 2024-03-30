import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxofarrayComponent } from './maxofarray.component';

describe('MaxofarrayComponent', () => {
  let component: MaxofarrayComponent;
  let fixture: ComponentFixture<MaxofarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxofarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxofarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
