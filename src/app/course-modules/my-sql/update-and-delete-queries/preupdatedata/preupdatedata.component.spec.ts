import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreupdatedataComponent } from './preupdatedata.component';

describe('PreupdatedataComponent', () => {
  let component: PreupdatedataComponent;
  let fixture: ComponentFixture<PreupdatedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreupdatedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreupdatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
