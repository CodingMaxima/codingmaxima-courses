import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingFlowComponent } from './rendering-flow.component';

describe('RenderingFlowComponent', () => {
  let component: RenderingFlowComponent;
  let fixture: ComponentFixture<RenderingFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
