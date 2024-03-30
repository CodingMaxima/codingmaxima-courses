import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcrComponent } from './ncr.component';

describe('NcrComponent', () => {
  let component: NcrComponent;
  let fixture: ComponentFixture<NcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
