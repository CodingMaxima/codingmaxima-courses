import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsComponent } from './commands/commands.component';
import { WorkingwithgithubComponent } from './workingwithgithub/workingwithgithub.component';
import { GitintroductionComponent } from './gitintroduction/gitintroduction.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommandsComponent,
    WorkingwithgithubComponent,
    GitintroductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'github/gitintro/gitintroduction', component: GitintroductionComponent },
      { path: 'github/gitintro/commands', component: CommandsComponent },
      { path: 'github/gitintro/workingwithgithub', component: WorkingwithgithubComponent }
    ])
  ]
})
export class GitinroModule { }
