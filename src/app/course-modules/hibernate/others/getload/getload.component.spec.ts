import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetloadComponent } from './getload.component';

describe('GetloadComponent', () => {
  let component: GetloadComponent;
  let fixture: ComponentFixture<GetloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
