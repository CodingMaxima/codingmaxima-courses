import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidMountComponent } from './did-mount.component';

describe('DidMountComponent', () => {
  let component: DidMountComponent;
  let fixture: ComponentFixture<DidMountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidMountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DidMountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
