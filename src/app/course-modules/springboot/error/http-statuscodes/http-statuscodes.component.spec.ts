import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatuscodesComponent } from './http-statuscodes.component';

describe('HttpStatuscodesComponent', () => {
  let component: HttpStatuscodesComponent;
  let fixture: ComponentFixture<HttpStatuscodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpStatuscodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpStatuscodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
