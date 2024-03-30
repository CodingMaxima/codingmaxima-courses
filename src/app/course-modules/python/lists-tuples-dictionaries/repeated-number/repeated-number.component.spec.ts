import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedNumberComponent } from './repeated-number.component';

describe('RepeatedNumberComponent', () => {
  let component: RepeatedNumberComponent;
  let fixture: ComponentFixture<RepeatedNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatedNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
