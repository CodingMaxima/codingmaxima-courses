import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindeleComponent } from './findele.component';

describe('FindeleComponent', () => {
  let component: FindeleComponent;
  let fixture: ComponentFixture<FindeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
