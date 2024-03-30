import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingElementsComponent } from './rendering-elements.component';

describe('RenderingElementsComponent', () => {
  let component: RenderingElementsComponent;
  let fixture: ComponentFixture<RenderingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
