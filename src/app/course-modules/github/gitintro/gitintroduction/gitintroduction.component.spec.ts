import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitintroductionComponent } from './gitintroduction.component';

describe('GitintroductionComponent', () => {
  let component: GitintroductionComponent;
  let fixture: ComponentFixture<GitintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitintroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
