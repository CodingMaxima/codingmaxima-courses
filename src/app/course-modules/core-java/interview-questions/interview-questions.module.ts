import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { QuestionsComponent } from './questions/questions.component';



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"core-java/interview-questions/questions", component:QuestionsComponent},
    ])
  ]
})
export class InterviewQuestionsModule { }
