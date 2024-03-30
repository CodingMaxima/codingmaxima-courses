import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConsraintsComponent } from './free-consraints.component';

describe('FreeConsraintsComponent', () => {
  let component: FreeConsraintsComponent;
  let fixture: ComponentFixture<FreeConsraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeConsraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeConsraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
