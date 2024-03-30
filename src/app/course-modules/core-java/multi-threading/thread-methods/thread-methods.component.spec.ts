import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadMethodsComponent } from './thread-methods.component';

describe('ThreadMethodsComponent', () => {
  let component: ThreadMethodsComponent;
  let fixture: ComponentFixture<ThreadMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
