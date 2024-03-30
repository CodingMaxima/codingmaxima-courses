import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetinbstComponent } from './targetinbst.component';

describe('TargetinbstComponent', () => {
  let component: TargetinbstComponent;
  let fixture: ComponentFixture<TargetinbstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetinbstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetinbstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
