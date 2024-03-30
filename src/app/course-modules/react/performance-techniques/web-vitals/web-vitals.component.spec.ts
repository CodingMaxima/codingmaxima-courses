import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebVitalsComponent } from './web-vitals.component';

describe('WebVitalsComponent', () => {
  let component: WebVitalsComponent;
  let fixture: ComponentFixture<WebVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
