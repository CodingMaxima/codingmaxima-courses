import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertinbstComponent } from './insertinbst.component';

describe('InsertinbstComponent', () => {
  let component: InsertinbstComponent;
  let fixture: ComponentFixture<InsertinbstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertinbstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertinbstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
