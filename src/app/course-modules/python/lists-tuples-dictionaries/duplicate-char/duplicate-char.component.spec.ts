import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCharComponent } from './duplicate-char.component';

describe('DuplicateCharComponent', () => {
  let component: DuplicateCharComponent;
  let fixture: ComponentFixture<DuplicateCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
