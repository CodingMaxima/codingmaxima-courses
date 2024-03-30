import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationMappingComponent } from './relation-mapping.component';

describe('RelationMappingComponent', () => {
  let component: RelationMappingComponent;
  let fixture: ComponentFixture<RelationMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
