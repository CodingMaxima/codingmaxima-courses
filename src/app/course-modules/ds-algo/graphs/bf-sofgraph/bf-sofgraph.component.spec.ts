import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfSofgraphComponent } from './bf-sofgraph.component';

describe('BfSofgraphComponent', () => {
  let component: BfSofgraphComponent;
  let fixture: ComponentFixture<BfSofgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfSofgraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfSofgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
