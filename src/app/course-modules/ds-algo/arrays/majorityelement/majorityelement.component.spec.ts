import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorityelementComponent } from './majorityelement.component';

describe('MajorityelementComponent', () => {
  let component: MajorityelementComponent;
  let fixture: ComponentFixture<MajorityelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorityelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorityelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
