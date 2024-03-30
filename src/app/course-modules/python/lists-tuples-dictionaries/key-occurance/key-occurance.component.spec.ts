import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyOccuranceComponent } from './key-occurance.component';

describe('KeyOccuranceComponent', () => {
  let component: KeyOccuranceComponent;
  let fixture: ComponentFixture<KeyOccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyOccuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyOccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
