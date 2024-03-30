import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseroomComponent } from './houseroom.component';

describe('HouseroomComponent', () => {
  let component: HouseroomComponent;
  let fixture: ComponentFixture<HouseroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
