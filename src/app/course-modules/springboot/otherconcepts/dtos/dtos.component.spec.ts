import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtosComponent } from './dtos.component';

describe('DtosComponent', () => {
  let component: DtosComponent;
  let fixture: ComponentFixture<DtosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
