import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsKeysComponent } from './lists-keys.component';

describe('ListsKeysComponent', () => {
  let component: ListsKeysComponent;
  let fixture: ComponentFixture<ListsKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsKeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
