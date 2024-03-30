import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPreDataComponent } from './insert-pre-data.component';

describe('InsertPreDataComponent', () => {
  let component: InsertPreDataComponent;
  let fixture: ComponentFixture<InsertPreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPreDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
