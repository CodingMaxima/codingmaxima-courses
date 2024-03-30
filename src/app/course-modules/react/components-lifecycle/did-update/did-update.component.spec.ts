import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidUpdateComponent } from './did-update.component';

describe('DidUpdateComponent', () => {
  let component: DidUpdateComponent;
  let fixture: ComponentFixture<DidUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DidUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
