import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClassRelationComponent } from './free-class-relation.component';

describe('FreeClassRelationComponent', () => {
  let component: FreeClassRelationComponent;
  let fixture: ComponentFixture<FreeClassRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeClassRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeClassRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
