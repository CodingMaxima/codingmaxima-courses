import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAlterDropComponent } from './free-alter-drop.component';

describe('FreeAlterDropComponent', () => {
  let component: FreeAlterDropComponent;
  let fixture: ComponentFixture<FreeAlterDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAlterDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAlterDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
