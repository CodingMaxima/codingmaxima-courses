import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDecoratorComponent } from './timer-decorator.component';

describe('TimerDecoratorComponent', () => {
  let component: TimerDecoratorComponent;
  let fixture: ComponentFixture<TimerDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
