import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologicalsortComponent } from './topologicalsort.component';

describe('TopologicalsortComponent', () => {
  let component: TopologicalsortComponent;
  let fixture: ComponentFixture<TopologicalsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopologicalsortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopologicalsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
