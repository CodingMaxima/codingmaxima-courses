import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedublicatesComponent } from './removedublicates.component';

describe('RemovedublicatesComponent', () => {
  let component: RemovedublicatesComponent;
  let fixture: ComponentFixture<RemovedublicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedublicatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedublicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
