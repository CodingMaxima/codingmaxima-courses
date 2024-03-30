import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomorphicNumberComponent } from './automorphic-number.component';

describe('AutomorphicNumberComponent', () => {
  let component: AutomorphicNumberComponent;
  let fixture: ComponentFixture<AutomorphicNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomorphicNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomorphicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
