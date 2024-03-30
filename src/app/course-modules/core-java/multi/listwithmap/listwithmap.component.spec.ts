import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwithmapComponent } from './listwithmap.component';

describe('ListwithmapComponent', () => {
  let component: ListwithmapComponent;
  let fixture: ComponentFixture<ListwithmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListwithmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwithmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
