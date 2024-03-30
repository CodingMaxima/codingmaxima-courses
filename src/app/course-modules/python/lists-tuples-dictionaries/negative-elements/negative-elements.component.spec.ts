import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeElementsComponent } from './negative-elements.component';

describe('NegativeElementsComponent', () => {
  let component: NegativeElementsComponent;
  let fixture: ComponentFixture<NegativeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
