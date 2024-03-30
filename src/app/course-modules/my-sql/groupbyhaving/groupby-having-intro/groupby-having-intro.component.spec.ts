import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbyHavingIntroComponent } from './groupby-having-intro.component';

describe('GroupbyHavingIntroComponent', () => {
  let component: GroupbyHavingIntroComponent;
  let fixture: ComponentFixture<GroupbyHavingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupbyHavingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbyHavingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
