import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongNumberComponent } from './strong-number.component';

describe('StrongNumberComponent', () => {
  let component: StrongNumberComponent;
  let fixture: ComponentFixture<StrongNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
