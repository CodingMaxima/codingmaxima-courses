import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KthlargestsumComponent } from './kthlargestsum.component';

describe('KthlargestsumComponent', () => {
  let component: KthlargestsumComponent;
  let fixture: ComponentFixture<KthlargestsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KthlargestsumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KthlargestsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
