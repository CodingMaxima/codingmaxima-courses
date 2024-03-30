import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LombokComponent } from './lombok.component';

describe('LombokComponent', () => {
  let component: LombokComponent;
  let fixture: ComponentFixture<LombokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LombokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LombokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
