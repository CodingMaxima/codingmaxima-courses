import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingStatesPropsComponent } from './handling-states-props.component';

describe('HandlingStatesPropsComponent', () => {
  let component: HandlingStatesPropsComponent;
  let fixture: ComponentFixture<HandlingStatesPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingStatesPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingStatesPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
