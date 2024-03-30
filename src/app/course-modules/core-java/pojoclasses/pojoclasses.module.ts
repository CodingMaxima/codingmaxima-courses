import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { HumanComponent } from './human/human.component';
import { HouseComponent } from './house/house.component';
import { StoreComponent } from './store/store.component';
import { CityComponent } from './city/city.component';
import { CollegeComponent } from './college/college.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroComponent } from './intro/intro.component';
import { EqualhascodeComponent } from './equalhascode/equalhascode.component';



@NgModule({
  declarations: [
    StudentComponent,
    EmployeeComponent,
    HumanComponent,
    HouseComponent,
    StoreComponent,
    CityComponent,
    CollegeComponent,
    IntroComponent,
    EqualhascodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/pojoclasses/intro', component:IntroComponent},
      { path: 'core-java/pojoclasses/equalhascode', component:EqualhascodeComponent},
      { path: 'core-java/pojoclasses/student', component:StudentComponent},
      { path: 'core-java/pojoclasses/city', component:CityComponent},
      { path: 'core-java/pojoclasses/house', component:HouseComponent},
      { path: 'core-java/pojoclasses/employee', component:EmployeeComponent},  
      { path: 'core-java/pojoclasses/human', component:HumanComponent},

    ])
  ]
})
export class PojoclassesModule { }
