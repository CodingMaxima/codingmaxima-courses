import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { GroupbyHavingIntroComponent } from './groupby-having-intro/groupby-having-intro.component';
import { EmployeeGroupbyHavingComponent } from './employee-groupby-having/employee-groupby-having.component';
import { StudentGroupbyHavingComponent } from './student-groupby-having/student-groupby-having.component';



@NgModule({
  declarations: [
    PredataComponent,
    GroupbyHavingIntroComponent,
    EmployeeGroupbyHavingComponent,
    StudentGroupbyHavingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/groupbyhaving/predata', component:  PredataComponent},
      { path: 'my-sql/groupbyhaving/groupby-having-intro', component:  GroupbyHavingIntroComponent},
      { path: 'my-sql/groupbyhaving/employee-groupby-having', component:  EmployeeGroupbyHavingComponent},
      { path: 'my-sql/groupbyhaving/student-groupby-having', component:  StudentGroupbyHavingComponent}
   
    ])
  ]
})
export class GroupbyhavingModule { }
