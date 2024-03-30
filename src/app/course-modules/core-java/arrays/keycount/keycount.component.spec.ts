import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycountComponent } from './keycount.component';

describe('KeycountComponent', () => {
  let component: KeycountComponent;
  let fixture: ComponentFixture<KeycountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeycountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
