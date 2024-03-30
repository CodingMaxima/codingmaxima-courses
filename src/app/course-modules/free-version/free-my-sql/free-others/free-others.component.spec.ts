import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeOthersComponent } from './free-others.component';

describe('FreeOthersComponent', () => {
  let component: FreeOthersComponent;
  let fixture: ComponentFixture<FreeOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
