import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinofarrayComponent } from './minofarray.component';

describe('MinofarrayComponent', () => {
  let component: MinofarrayComponent;
  let fixture: ComponentFixture<MinofarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinofarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinofarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
