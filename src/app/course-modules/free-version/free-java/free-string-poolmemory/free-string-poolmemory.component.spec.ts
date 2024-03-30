import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStringPoolmemoryComponent } from './free-string-poolmemory.component';

describe('FreeStringPoolmemoryComponent', () => {
  let component: FreeStringPoolmemoryComponent;
  let fixture: ComponentFixture<FreeStringPoolmemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeStringPoolmemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeStringPoolmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
