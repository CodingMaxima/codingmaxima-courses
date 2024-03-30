import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsKgPoundProjectComponent } from './free-js-kg-pound-project.component';

describe('FreeJsKgPoundProjectComponent', () => {
  let component: FreeJsKgPoundProjectComponent;
  let fixture: ComponentFixture<FreeJsKgPoundProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsKgPoundProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsKgPoundProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
