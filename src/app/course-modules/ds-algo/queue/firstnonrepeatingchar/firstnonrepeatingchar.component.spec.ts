import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnonrepeatingcharComponent } from './firstnonrepeatingchar.component';

describe('FirstnonrepeatingcharComponent', () => {
  let component: FirstnonrepeatingcharComponent;
  let fixture: ComponentFixture<FirstnonrepeatingcharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstnonrepeatingcharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstnonrepeatingcharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
