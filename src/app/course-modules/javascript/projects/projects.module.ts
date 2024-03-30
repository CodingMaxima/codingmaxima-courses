import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ConversionsComponent } from './conversions/conversions.component';
import { ConversionsTwoComponent } from './conversions-two/conversions-two.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { GuessingNumberComponent } from './guessing-number/guessing-number.component';
import { AllConversionsComponent } from './all-conversions/all-conversions.component';
import { AdvanceQuizComponent } from './advance-quiz/advance-quiz.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { QuizComponent } from './quiz/quiz.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { KgPoundConversionComponent } from './kg-pound-conversion/kg-pound-conversion.component';

@NgModule({
  declarations: [
    ConversionsComponent,
    ConversionsTwoComponent,
    DigitalClockComponent,
    GuessingNumberComponent,
    AllConversionsComponent,
    AdvanceQuizComponent,
    StopwatchComponent,
    QuizComponent,
    RandomQuoteComponent,
    KgPoundConversionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/projects/conversions',
        component: ConversionsComponent,
      },
      {
        path: 'javascript/projects/conversions-two',
        component: ConversionsTwoComponent,
      },

      {
        path: 'javascript/projects/digital-clock',
        component: DigitalClockComponent,
      },
      {
        path: 'javascript/projects/guessing-number',
        component: GuessingNumberComponent,
      },
      {
        path: 'javascript/projects/all-conversions',
        component: AllConversionsComponent,
      },
      {
        path: 'javascript/projects/advance-quiz',
        component: AdvanceQuizComponent,
      },

      { path: 'javascript/projects/stopwatch', component: StopwatchComponent },
      { path: 'javascript/projects/quiz', component: QuizComponent },
      {
        path: 'javascript/projects/random-quote',
        component: RandomQuoteComponent,
      },
      {
        path: 'javascript/projects/kg-pound-conversion',
        component: KgPoundConversionComponent,
      },
    ]),
  ],
})
export class ProjectsModule {}
