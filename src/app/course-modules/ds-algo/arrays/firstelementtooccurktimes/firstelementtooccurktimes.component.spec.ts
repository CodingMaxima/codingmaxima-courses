import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstelementtooccurktimesComponent } from './firstelementtooccurktimes.component';

describe('FirstelementtooccurktimesComponent', () => {
  let component: FirstelementtooccurktimesComponent;
  let fixture: ComponentFixture<FirstelementtooccurktimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstelementtooccurktimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstelementtooccurktimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
