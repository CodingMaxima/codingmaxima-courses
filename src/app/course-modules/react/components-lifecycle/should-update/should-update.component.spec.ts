import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldUpdateComponent } from './should-update.component';

describe('ShouldUpdateComponent', () => {
  let component: ShouldUpdateComponent;
  let fixture: ComponentFixture<ShouldUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShouldUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
