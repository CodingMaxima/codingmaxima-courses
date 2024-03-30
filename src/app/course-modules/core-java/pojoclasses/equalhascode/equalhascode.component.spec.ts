import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualhascodeComponent } from './equalhascode.component';

describe('EqualhascodeComponent', () => {
  let component: EqualhascodeComponent;
  let fixture: ComponentFixture<EqualhascodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualhascodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualhascodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
