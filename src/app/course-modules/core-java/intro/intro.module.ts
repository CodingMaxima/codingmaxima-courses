import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallComponent } from './install/install.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { ArthmaticComponent } from './arthmatic/arthmatic.component';
import { RelationalComponent } from './relational/relational.component';
import { LogicalComponent } from './logical/logical.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ControlComponent } from './control/control.component';
import { FlowComponent } from './flow/flow.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { ReadinputComponent } from './readinput/readinput.component';



@NgModule({
  declarations: [
    InstallComponent,
    IntroductionComponent,
    DatatypesComponent,
    ArthmaticComponent,
    RelationalComponent,
    LogicalComponent,
    AssignmentComponent,
    ControlComponent,
    FlowComponent,
    ReadinputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"core-java/intro/install", component:InstallComponent},
      {path:"core-java/intro/introduction", component:IntroductionComponent},
      {path:"core-java/intro/datatypes", component:DatatypesComponent},
      {path:"core-java/intro/control", component:ControlComponent},
      {path:"core-java/intro/arthmatic", component:ArthmaticComponent},
      {path:"core-java/intro/relational", component:RelationalComponent},
      {path:"core-java/intro/logical", component:LogicalComponent},
      {path:"core-java/intro/assignment", component:AssignmentComponent},
      {path:"core-java/intro/flow", component:FlowComponent},
      {path:"core-java/intro/readinput", component:ReadinputComponent}
    ])
  ]
})
export class IntroModule { }
