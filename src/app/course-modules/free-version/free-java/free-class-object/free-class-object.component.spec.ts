import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClassObjectComponent } from './free-class-object.component';

describe('FreeClassObjectComponent', () => {
  let component: FreeClassObjectComponent;
  let fixture: ComponentFixture<FreeClassObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeClassObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeClassObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
