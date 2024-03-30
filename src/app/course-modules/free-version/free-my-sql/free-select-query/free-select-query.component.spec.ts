import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSelectQueryComponent } from './free-select-query.component';

describe('FreeSelectQueryComponent', () => {
  let component: FreeSelectQueryComponent;
  let fixture: ComponentFixture<FreeSelectQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeSelectQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSelectQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
