import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsPattern2Component } from './free-js-pattern2.component';

describe('FreeJsPattern2Component', () => {
  let component: FreeJsPattern2Component;
  let fixture: ComponentFixture<FreeJsPattern2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsPattern2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsPattern2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
