import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectEmployeeComponent } from './select-employee/select-employee.component';
import { SelectStudentComponent } from './select-student/select-student.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { SelectPreDataComponent } from './select-pre-data/select-pre-data.component';



@NgModule({
  declarations: [
    SelectEmployeeComponent,
    SelectStudentComponent,
    SelectPreDataComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/select-query/select-pre-data', component:  SelectPreDataComponent},
      { path: 'my-sql/select-query/select-employee', component: SelectEmployeeComponent },
      { path: 'my-sql/select-query/select-student', component: SelectStudentComponent }

    ])
  ]
})
export class SelectQueryModule { }
