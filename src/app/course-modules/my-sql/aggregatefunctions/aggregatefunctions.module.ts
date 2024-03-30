import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AggregateIntroComponent } from './aggregate-intro/aggregate-intro.component';
import { EmployeeAggregateComponent } from './employee-aggregate/employee-aggregate.component';
import { StudentAggregateComponent } from './student-aggregate/student-aggregate.component';
import { PreDataComponent } from './pre-data/pre-data.component';

@NgModule({
  declarations: [
    AggregateIntroComponent,
    EmployeeAggregateComponent,
    StudentAggregateComponent,
    PreDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-sql/aggregatefunctions/pre-data', component: PreDataComponent},
      { path: 'my-sql/aggregatefunctions/aggregate-intro', component: AggregateIntroComponent},
      { path: 'my-sql/aggregatefunctions/employee-aggregate', component: EmployeeAggregateComponent},
      { path: 'my-sql/aggregatefunctions/student-aggregate', component: StudentAggregateComponent}

    ])
  ]
})
export class AggregatefunctionsModule { }
