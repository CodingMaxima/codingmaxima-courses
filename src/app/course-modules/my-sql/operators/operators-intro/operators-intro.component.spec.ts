import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsIntroComponent } from './operators-intro.component';

describe('OperatorsIntroComponent', () => {
  let component: OperatorsIntroComponent;
  let fixture: ComponentFixture<OperatorsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
