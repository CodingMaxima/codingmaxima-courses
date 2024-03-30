import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { OopsIntroComponent } from './oops-intro/oops-intro.component';
import { StudentComponent } from './student/student.component';
import { EmployeComponent } from './employe/employe.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { EmployeInheritanceComponent } from './employe-inheritance/employe-inheritance.component';
import { InterestcalculatorComponent } from './interestcalculator/interestcalculator.component';



@NgModule({
  declarations: [
    OopsIntroComponent,
    StudentComponent,
    EmployeComponent,
    InheritanceComponent,
    EmployeInheritanceComponent,
    InterestcalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/object-oriented-programming-concepts/oops-intro', component:  OopsIntroComponent},
      { path: 'python/object-oriented-programming-concepts/student', component: StudentComponent},
      { path: 'python/object-oriented-programming-concepts/employe', component: EmployeComponent},
      { path: 'python/object-oriented-programming-concepts/inheritance', component: InheritanceComponent},
      { path: 'python/object-oriented-programming-concepts/interestcalculator', component: InterestcalculatorComponent},
      { path: 'python/object-oriented-programming-concepts/employe-inheritance', component: EmployeInheritanceComponent}
   
    ])
	
  ]
})
export class ObjectOrientedProgrammingConceptsModule { }
