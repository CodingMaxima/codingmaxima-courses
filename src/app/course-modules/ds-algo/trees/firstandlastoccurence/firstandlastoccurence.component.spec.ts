import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstandlastoccurenceComponent } from './firstandlastoccurence.component';

describe('FirstandlastoccurenceComponent', () => {
  let component: FirstandlastoccurenceComponent;
  let fixture: ComponentFixture<FirstandlastoccurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstandlastoccurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstandlastoccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
