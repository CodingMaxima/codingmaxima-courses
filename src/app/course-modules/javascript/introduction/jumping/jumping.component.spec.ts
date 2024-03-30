import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingComponent } from './jumping.component';

describe('JumpingComponent', () => {
  let component: JumpingComponent;
  let fixture: ComponentFixture<JumpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
