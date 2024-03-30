import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { OperatorsIntroComponent } from './operators-intro/operators-intro.component';
import { EmployeeOperatorComponent } from './employee-operator/employee-operator.component';
import { StudentOperatorComponent } from './student-operator/student-operator.component';
import { PreDataComponent } from './pre-data/pre-data.component';

@NgModule({
  declarations: [
    OperatorsIntroComponent,
    EmployeeOperatorComponent,
    StudentOperatorComponent,
    PreDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-sql/operators/pre-data', component: PreDataComponent},
      { path: 'my-sql/operators/operators-intro', component: OperatorsIntroComponent},
      { path: 'my-sql/operators/employee-operator', component: EmployeeOperatorComponent},
      { path: 'my-sql/operators/student-operator', component: StudentOperatorComponent}
      
    ])
  ]
})
export class OperatorsModule { }
