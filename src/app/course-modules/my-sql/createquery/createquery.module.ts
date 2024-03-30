import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateEmployeeComponent,
    CreateStudentComponent,
    CreateMoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/createquery/create-employee', component: CreateEmployeeComponent },
      { path: 'my-sql/createquery/create-student', component: CreateStudentComponent },
      { path: 'my-sql/createquery/create-movies', component: CreateMoviesComponent }
    ])
  ]
})
export class CreatequeryModule { }
