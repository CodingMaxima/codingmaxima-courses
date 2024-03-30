import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxSagaComponent } from './redux-saga.component';

describe('ReduxSagaComponent', () => {
  let component: ReduxSagaComponent;
  let fixture: ComponentFixture<ReduxSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxSagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
