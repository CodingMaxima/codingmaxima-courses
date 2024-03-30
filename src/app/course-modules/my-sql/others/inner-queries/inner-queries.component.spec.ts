import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerQueriesComponent } from './inner-queries.component';

describe('InnerQueriesComponent', () => {
  let component: InnerQueriesComponent;
  let fixture: ComponentFixture<InnerQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
