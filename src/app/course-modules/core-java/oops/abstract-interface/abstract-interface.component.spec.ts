import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractInterfaceComponent } from './abstract-interface.component';

describe('AbstractInterfaceComponent', () => {
  let component: AbstractInterfaceComponent;
  let fixture: ComponentFixture<AbstractInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
