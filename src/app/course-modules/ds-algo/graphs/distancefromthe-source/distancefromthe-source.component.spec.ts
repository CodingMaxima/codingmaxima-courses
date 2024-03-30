import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancefromtheSourceComponent } from './distancefromthe-source.component';

describe('DistancefromtheSourceComponent', () => {
  let component: DistancefromtheSourceComponent;
  let fixture: ComponentFixture<DistancefromtheSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistancefromtheSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistancefromtheSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
