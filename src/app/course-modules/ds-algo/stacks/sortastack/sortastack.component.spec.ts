import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortastackComponent } from './sortastack.component';

describe('SortastackComponent', () => {
  let component: SortastackComponent;
  let fixture: ComponentFixture<SortastackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortastackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortastackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
