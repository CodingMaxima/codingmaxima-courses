import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsIntroComponent } from './lists-intro.component';

describe('ListsIntroComponent', () => {
  let component: ListsIntroComponent;
  let fixture: ComponentFixture<ListsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
