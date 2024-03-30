import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedCharComponent } from './repeated-char.component';

describe('RepeatedCharComponent', () => {
  let component: RepeatedCharComponent;
  let fixture: ComponentFixture<RepeatedCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatedCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatedCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
