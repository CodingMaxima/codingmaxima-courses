import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { HouseComponent } from './house/house.component';
import { HumanComponent } from './human/human.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { ClassandobjectComponent } from './classandobject/classandobject.component';
import { TostringComponent } from './tostring/tostring.component';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    StudentComponent,
    EmployeeComponent,
    HouseComponent,
    HumanComponent,
    CityComponent,
    ClassandobjectComponent,
    TostringComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'core-java/objectclass/classandobject', component:ClassandobjectComponent},
      { path: 'core-java/objectclass/tostring', component:TostringComponent  },
      { path: 'core-java/objectclass/student', component:StudentComponent  },
      { path: 'core-java/objectclass/employee', component:EmployeeComponent  },
      { path: 'core-java/objectclass/house', component:HouseComponent  },
      { path: 'core-java/objectclass/human', component:HumanComponent  },
      { path: 'core-java/objectclass/city', component:CityComponent  },
    ])
  ]
})
export class ObjectclassModule { }
