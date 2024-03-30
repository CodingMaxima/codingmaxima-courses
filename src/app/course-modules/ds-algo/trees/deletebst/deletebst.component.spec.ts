import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebstComponent } from './deletebst.component';

describe('DeletebstComponent', () => {
  let component: DeletebstComponent;
  let fixture: ComponentFixture<DeletebstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletebstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
