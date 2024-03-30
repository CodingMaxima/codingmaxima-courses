import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskovComponent } from './liskov.component';

describe('LiskovComponent', () => {
  let component: LiskovComponent;
  let fixture: ComponentFixture<LiskovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiskovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiskovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
