import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCreateTableComponent } from './free-create-table.component';

describe('FreeCreateTableComponent', () => {
  let component: FreeCreateTableComponent;
  let fixture: ComponentFixture<FreeCreateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCreateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCreateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
