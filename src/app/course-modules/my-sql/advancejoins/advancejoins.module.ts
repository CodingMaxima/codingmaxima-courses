import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { EmployeeMappingJoinsComponent } from './employee-mapping-joins/employee-mapping-joins.component';



@NgModule({
  declarations: [
    EmployeeMappingJoinsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/advancejoins/employee-mapping-joins', component: EmployeeMappingJoinsComponent}
    ])
  ]
})
export class AdvancejoinsModule { }
