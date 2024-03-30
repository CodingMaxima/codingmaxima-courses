import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlIntroComponent } from './mysql-intro.component';

describe('MysqlIntroComponent', () => {
  let component: MysqlIntroComponent;
  let fixture: ComponentFixture<MysqlIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
