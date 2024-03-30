import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamFragmentsComponent } from './queryparam-fragments.component';

describe('QueryparamFragmentsComponent', () => {
  let component: QueryparamFragmentsComponent;
  let fixture: ComponentFixture<QueryparamFragmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparamFragmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
