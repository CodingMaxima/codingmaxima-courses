import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionInsertionArrayComponent } from './union-insertion-array.component';

describe('UnionInsertionArrayComponent', () => {
  let component: UnionInsertionArrayComponent;
  let fixture: ComponentFixture<UnionInsertionArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionInsertionArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionInsertionArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
