import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraytoBSTComponent } from './arrayto-bst.component';

describe('ArraytoBSTComponent', () => {
  let component: ArraytoBSTComponent;
  let fixture: ComponentFixture<ArraytoBSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraytoBSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraytoBSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
