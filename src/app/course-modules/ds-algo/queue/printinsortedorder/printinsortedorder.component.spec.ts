import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintinsortedorderComponent } from './printinsortedorder.component';

describe('PrintinsortedorderComponent', () => {
  let component: PrintinsortedorderComponent;
  let fixture: ComponentFixture<PrintinsortedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintinsortedorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintinsortedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
