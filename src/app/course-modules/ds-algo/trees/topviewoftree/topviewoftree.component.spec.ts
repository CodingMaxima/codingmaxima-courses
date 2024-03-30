import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopviewoftreeComponent } from './topviewoftree.component';

describe('TopviewoftreeComponent', () => {
  let component: TopviewoftreeComponent;
  let fixture: ComponentFixture<TopviewoftreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopviewoftreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopviewoftreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
