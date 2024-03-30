import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPropsFragmentsComponent } from './render-props-fragments.component';

describe('RenderPropsFragmentsComponent', () => {
  let component: RenderPropsFragmentsComponent;
  let fixture: ComponentFixture<RenderPropsFragmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderPropsFragmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPropsFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
