import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfssofgraphComponent } from './dfssofgraph.component';

describe('DfssofgraphComponent', () => {
  let component: DfssofgraphComponent;
  let fixture: ComponentFixture<DfssofgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfssofgraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfssofgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
