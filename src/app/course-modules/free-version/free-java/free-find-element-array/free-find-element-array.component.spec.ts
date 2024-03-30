import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFindElementArrayComponent } from './free-find-element-array.component';

describe('FreeFindElementArrayComponent', () => {
  let component: FreeFindElementArrayComponent;
  let fixture: ComponentFixture<FreeFindElementArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeFindElementArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeFindElementArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
