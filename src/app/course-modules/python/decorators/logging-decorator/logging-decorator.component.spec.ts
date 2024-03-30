import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingDecoratorComponent } from './logging-decorator.component';

describe('LoggingDecoratorComponent', () => {
  let component: LoggingDecoratorComponent;
  let fixture: ComponentFixture<LoggingDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggingDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
