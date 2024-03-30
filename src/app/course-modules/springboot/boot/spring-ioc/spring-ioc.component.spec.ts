import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringIocComponent } from './spring-ioc.component';

describe('SpringIocComponent', () => {
  let component: SpringIocComponent;
  let fixture: ComponentFixture<SpringIocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringIocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringIocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
