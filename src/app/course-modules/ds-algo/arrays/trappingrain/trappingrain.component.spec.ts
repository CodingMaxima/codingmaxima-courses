import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrappingrainComponent } from './trappingrain.component';

describe('TrappingrainComponent', () => {
  let component: TrappingrainComponent;
  let fixture: ComponentFixture<TrappingrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrappingrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrappingrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
