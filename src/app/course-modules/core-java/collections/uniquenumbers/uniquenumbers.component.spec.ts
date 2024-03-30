import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquenumbersComponent } from './uniquenumbers.component';

describe('UniquenumbersComponent', () => {
  let component: UniquenumbersComponent;
  let fixture: ComponentFixture<UniquenumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquenumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquenumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
