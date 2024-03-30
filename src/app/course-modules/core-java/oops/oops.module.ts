import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { MultipleinhertanceComponent } from './multipleinhertance/multipleinhertance.component';
import { RouterModule } from '@angular/router';
import { ProjectFourComponent } from './project-four/project-four.component';
import { ProjectThreeComponent } from './project-three/project-three.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { AbstractInterfaceComponent } from './abstract-interface/abstract-interface.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    MultipleinhertanceComponent,
    ProjectFourComponent,
    ProjectThreeComponent,
    ProjectTwoComponent,
    ProjectOneComponent,
    AbstractInterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
      { path: 'core-java/oops/introduction', component:IntroductionComponent},
      { path: 'core-java/oops/project-one', component:ProjectOneComponent},
      { path: 'core-java/oops/project-two', component:ProjectTwoComponent},
      { path: 'core-java/oops/project-three', component:ProjectThreeComponent},
      { path: 'core-java/oops/project-four', component:ProjectFourComponent},
      { path: 'core-java/oops/abstract-interface', component:AbstractInterfaceComponent},
      { path: 'core-java/oops/multipleinhertance', component:MultipleinhertanceComponent}
    ])
  ]
})
export class OopsModule { }
