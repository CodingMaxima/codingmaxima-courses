import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforNgifComponent } from './ngfor-ngif.component';

describe('NgforNgifComponent', () => {
  let component: NgforNgifComponent;
  let fixture: ComponentFixture<NgforNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
