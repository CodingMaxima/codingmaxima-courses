import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsPattern1Component } from './free-js-pattern1.component';

describe('FreeJsPattern1Component', () => {
  let component: FreeJsPattern1Component;
  let fixture: ComponentFixture<FreeJsPattern1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsPattern1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsPattern1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
