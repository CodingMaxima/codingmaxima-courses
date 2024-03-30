import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMutliThreadingComponent } from './free-mutli-threading.component';

describe('FreeMutliThreadingComponent', () => {
  let component: FreeMutliThreadingComponent;
  let fixture: ComponentFixture<FreeMutliThreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMutliThreadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMutliThreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
