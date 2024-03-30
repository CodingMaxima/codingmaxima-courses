import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { InsertPreDataComponent } from './insert-pre-data/insert-pre-data.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    InsertEmployeeComponent,
    InsertStudentComponent,
    InsertPreDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/insert-query/insert-pre-data', component:  InsertPreDataComponent},
      { path: 'my-sql/insert-query/insert-employee', component: InsertEmployeeComponent },
      { path: 'my-sql/insert-query/insert-student', component: InsertStudentComponent },
    ])
  ]
})
export class InsertQueryModule { }
