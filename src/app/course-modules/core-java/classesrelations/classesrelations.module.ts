import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentbranchComponent } from './studentbranch/studentbranch.component';
import { CollegebranchComponent } from './collegebranch/collegebranch.component';
import { HouseroomComponent } from './houseroom/houseroom.component';
import { EmployeedesgnationComponent } from './employeedesgnation/employeedesgnation.component';
import { AprtflatroomComponent } from './aprtflatroom/aprtflatroom.component';
import { DistrictcityComponent } from './districtcity/districtcity.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { UsermovieComponent } from './usermovie/usermovie.component';



@NgModule({
  declarations: [
    StudentbranchComponent,
    CollegebranchComponent,
    HouseroomComponent,
    EmployeedesgnationComponent,
    AprtflatroomComponent,
    DistrictcityComponent,
    UsermovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/classesrelations/studentbranch', component:StudentbranchComponent},
      { path: 'core-java/classesrelations/usermovie', component:UsermovieComponent},
      { path: 'core-java/classesrelations/collegebranch', component:CollegebranchComponent},
      { path: 'core-java/classesrelations/employeedesgnation', component:EmployeedesgnationComponent},
      { path: 'core-java/classesrelations/houseroom', component:HouseroomComponent},
      { path: 'core-java/classesrelations/aptflatroom', component:AprtflatroomComponent},
      { path: 'core-java/classesrelations/districtcity', component:DistrictcityComponent},
    ])
  ]
})
export class ClassesrelationsModule { }
