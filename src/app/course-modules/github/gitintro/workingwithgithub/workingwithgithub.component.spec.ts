import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithgithubComponent } from './workingwithgithub.component';

describe('WorkingwithgithubComponent', () => {
  let component: WorkingwithgithubComponent;
  let fixture: ComponentFixture<WorkingwithgithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithgithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithgithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
