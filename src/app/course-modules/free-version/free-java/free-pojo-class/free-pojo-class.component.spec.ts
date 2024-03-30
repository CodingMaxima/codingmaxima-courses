import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePojoClassComponent } from './free-pojo-class.component';

describe('FreePojoClassComponent', () => {
  let component: FreePojoClassComponent;
  let fixture: ComponentFixture<FreePojoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePojoClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePojoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
