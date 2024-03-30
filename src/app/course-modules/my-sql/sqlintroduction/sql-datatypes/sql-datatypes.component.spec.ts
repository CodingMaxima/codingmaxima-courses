import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDatatypesComponent } from './sql-datatypes.component';

describe('SqlDatatypesComponent', () => {
  let component: SqlDatatypesComponent;
  let fixture: ComponentFixture<SqlDatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlDatatypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlDatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
