import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgbranchmngComponent } from './clgbranchmng.component';

describe('ClgbranchmngComponent', () => {
  let component: ClgbranchmngComponent;
  let fixture: ComponentFixture<ClgbranchmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgbranchmngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgbranchmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
