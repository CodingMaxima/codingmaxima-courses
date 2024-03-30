import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofnodeComponent } from './endofnode.component';

describe('EndofnodeComponent', () => {
  let component: EndofnodeComponent;
  let fixture: ComponentFixture<EndofnodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndofnodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndofnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
