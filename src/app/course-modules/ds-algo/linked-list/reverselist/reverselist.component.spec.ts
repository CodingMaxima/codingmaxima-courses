import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverselistComponent } from './reverselist.component';

describe('ReverselistComponent', () => {
  let component: ReverselistComponent;
  let fixture: ComponentFixture<ReverselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
