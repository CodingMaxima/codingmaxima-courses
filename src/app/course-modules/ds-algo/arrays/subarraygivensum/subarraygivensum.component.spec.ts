import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubarraygivensumComponent } from './subarraygivensum.component';

describe('SubarraygivensumComponent', () => {
  let component: SubarraygivensumComponent;
  let fixture: ComponentFixture<SubarraygivensumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubarraygivensumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubarraygivensumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
