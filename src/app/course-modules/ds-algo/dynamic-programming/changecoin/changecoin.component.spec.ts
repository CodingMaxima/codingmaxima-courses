import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecoinComponent } from './changecoin.component';

describe('ChangecoinComponent', () => {
  let component: ChangecoinComponent;
  let fixture: ComponentFixture<ChangecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangecoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
