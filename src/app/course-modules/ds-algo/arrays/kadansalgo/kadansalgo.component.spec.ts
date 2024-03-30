import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadansalgoComponent } from './kadansalgo.component';

describe('KadansalgoComponent', () => {
  let component: KadansalgoComponent;
  let fixture: ComponentFixture<KadansalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadansalgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KadansalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
