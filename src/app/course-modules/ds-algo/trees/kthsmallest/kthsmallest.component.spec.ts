import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KthsmallestComponent } from './kthsmallest.component';

describe('KthsmallestComponent', () => {
  let component: KthsmallestComponent;
  let fixture: ComponentFixture<KthsmallestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KthsmallestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KthsmallestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
