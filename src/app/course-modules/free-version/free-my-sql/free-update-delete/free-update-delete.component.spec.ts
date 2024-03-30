import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeUpdateDeleteComponent } from './free-update-delete.component';

describe('FreeUpdateDeleteComponent', () => {
  let component: FreeUpdateDeleteComponent;
  let fixture: ComponentFixture<FreeUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
