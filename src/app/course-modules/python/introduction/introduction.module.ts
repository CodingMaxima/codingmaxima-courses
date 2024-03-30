import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation/installation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PythonConsoleComponent } from './python-console/python-console.component';
import { OperatorsComponent } from './operators/operators.component';
import { ControlStatmentsComponent } from './control-statments/control-statments.component';
import { LoopsComponent } from './loops/loops.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    InstallationComponent,
    IntroductionComponent,
    PythonConsoleComponent,
    OperatorsComponent,
    ControlStatmentsComponent,
    LoopsComponent,
    KeywordsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

    { path: 'python/introduction/installation', component: InstallationComponent},
    { path: 'python/introduction/introduction', component: IntroductionComponent},
    { path: 'python/introduction/python-console', component: PythonConsoleComponent},
    { path: 'python/introduction/operators', component: OperatorsComponent},
    { path: 'python/introduction/control-statments', component: ControlStatmentsComponent},
    { path: 'python/introduction/loops', component: LoopsComponent},
    { path: 'python/introduction/keywords', component: KeywordsComponent}
  ])
  ]
})
export class IntroductionModule { }
