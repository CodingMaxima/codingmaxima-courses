import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPreDataComponent } from './select-pre-data.component';

describe('SelectPreDataComponent', () => {
  let component: SelectPreDataComponent;
  let fixture: ComponentFixture<SelectPreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPreDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
