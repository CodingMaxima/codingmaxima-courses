import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringpoolComponent } from './stringpool.component';

describe('StringpoolComponent', () => {
  let component: StringpoolComponent;
  let fixture: ComponentFixture<StringpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
