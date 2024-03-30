import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindelementComponent } from './findelement.component';

describe('FindelementComponent', () => {
  let component: FindelementComponent;
  let fixture: ComponentFixture<FindelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
