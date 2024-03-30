import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachnumbercountComponent } from './eachnumbercount.component';

describe('EachnumbercountComponent', () => {
  let component: EachnumbercountComponent;
  let fixture: ComponentFixture<EachnumbercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachnumbercountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachnumbercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
