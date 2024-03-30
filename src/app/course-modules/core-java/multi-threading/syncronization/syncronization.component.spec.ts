import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncronizationComponent } from './syncronization.component';

describe('SyncronizationComponent', () => {
  let component: SyncronizationComponent;
  let fixture: ComponentFixture<SyncronizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncronizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncronizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
