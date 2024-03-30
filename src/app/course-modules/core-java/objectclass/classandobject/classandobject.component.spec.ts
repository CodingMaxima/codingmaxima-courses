import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassandobjectComponent } from './classandobject.component';

describe('ClassandobjectComponent', () => {
  let component: ClassandobjectComponent;
  let fixture: ComponentFixture<ClassandobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassandobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassandobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
