import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialstackComponent } from './specialstack.component';

describe('SpecialstackComponent', () => {
  let component: SpecialstackComponent;
  let fixture: ComponentFixture<SpecialstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialstackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
