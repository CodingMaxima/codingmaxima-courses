import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysubsetComponent } from './arraysubset.component';

describe('ArraysubsetComponent', () => {
  let component: ArraysubsetComponent;
  let fixture: ComponentFixture<ArraysubsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraysubsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraysubsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
