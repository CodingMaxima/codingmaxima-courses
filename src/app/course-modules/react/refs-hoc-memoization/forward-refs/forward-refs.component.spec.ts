import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardRefsComponent } from './forward-refs.component';

describe('ForwardRefsComponent', () => {
  let component: ForwardRefsComponent;
  let fixture: ComponentFixture<ForwardRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardRefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
