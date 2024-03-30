import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingDomComponent } from './rendering-dom.component';

describe('RenderingDomComponent', () => {
  let component: RenderingDomComponent;
  let fixture: ComponentFixture<RenderingDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
