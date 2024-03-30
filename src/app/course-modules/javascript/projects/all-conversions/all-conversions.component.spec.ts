import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConversionsComponent } from './all-conversions.component';

describe('AllConversionsComponent', () => {
  let component: AllConversionsComponent;
  let fixture: ComponentFixture<AllConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConversionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
