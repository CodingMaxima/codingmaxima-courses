import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostoccurancestringComponent } from './mostoccurancestring.component';

describe('MostoccurancestringComponent', () => {
  let component: MostoccurancestringComponent;
  let fixture: ComponentFixture<MostoccurancestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostoccurancestringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostoccurancestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
