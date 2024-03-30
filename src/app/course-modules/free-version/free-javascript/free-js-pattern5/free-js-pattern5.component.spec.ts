import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsPattern5Component } from './free-js-pattern5.component';

describe('FreeJsPattern5Component', () => {
  let component: FreeJsPattern5Component;
  let fixture: ComponentFixture<FreeJsPattern5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsPattern5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsPattern5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
