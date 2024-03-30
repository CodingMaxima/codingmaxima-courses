import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeInsertComponent } from './free-insert.component';

describe('FreeInsertComponent', () => {
  let component: FreeInsertComponent;
  let fixture: ComponentFixture<FreeInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
