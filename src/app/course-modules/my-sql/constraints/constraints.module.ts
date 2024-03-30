import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { EmployeeconstraintsComponent } from './employeeconstraints/employeeconstraints.component';
import { StudentconstraintsComponent } from './studentconstraints/studentconstraints.component';


@NgModule({
  declarations: [
    IntoductionComponent,
    EmployeeconstraintsComponent,
    StudentconstraintsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/constraints/intoduction', component: IntoductionComponent },
      { path: 'my-sql/constraints/employeeconstraints', component: EmployeeconstraintsComponent },
      { path: 'my-sql/constraints/studentconstraints', component: StudentconstraintsComponent }

    ])
  ]
})
export class ConstraintsModule { }
