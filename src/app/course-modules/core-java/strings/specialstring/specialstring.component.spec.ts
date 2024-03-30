import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialstringComponent } from './specialstring.component';

describe('SpecialstringComponent', () => {
  let component: SpecialstringComponent;
  let fixture: ComponentFixture<SpecialstringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialstringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialstringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
