import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsReverseOfNumberComponent } from './free-js-reverse-of-number.component';

describe('FreeJsReverseOfNumberComponent', () => {
  let component: FreeJsReverseOfNumberComponent;
  let fixture: ComponentFixture<FreeJsReverseOfNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsReverseOfNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsReverseOfNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
