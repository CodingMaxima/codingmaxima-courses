import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { OperatorsComponent } from './operators/operators.component';
import { ControlStatementsComponent } from './control-statements/control-statements.component';
import { LoopsComponent } from './loops/loops.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { JumpingComponent } from './jumping/jumping.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { VariablesComponent } from './variables/variables.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    DatatypesComponent,
    OperatorsComponent,
    ControlStatementsComponent,
    LoopsComponent,
    KeywordsComponent,
    JumpingComponent,
    SyntaxComponent,
    VariablesComponent
  ],
  imports: [
    CommonModule, SharedModule,
    RouterModule.forRoot([

      { path: 'javascript/introduction/introduction', component: IntroductionComponent },
      { path: 'javascript/introduction/datatypes', component: DatatypesComponent },
      { path: 'javascript/introduction/operatiors', component: OperatorsComponent },
      { path: 'javascript/introduction/control-statments', component: ControlStatementsComponent },
      { path: 'javascript/introduction/loops', component: LoopsComponent },
      { path: 'javascript/introduction/keywords', component: KeywordsComponent },
      { path: 'javascript/introduction/jumping', component: JumpingComponent },
      { path: 'javascript/introduction/syntax', component: SyntaxComponent },
      { path: 'javascript/introduction/variables', component: VariablesComponent },

    ])
  ]
})
export class IntroductionModule { }
