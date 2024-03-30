import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeJsEvenOrOddComponent } from './free-js-even-or-odd/free-js-even-or-odd.component';
import { FreeJsReverseOfNumberComponent } from './free-js-reverse-of-number/free-js-reverse-of-number.component';
import { FreeJsPattern1Component } from './free-js-pattern1/free-js-pattern1.component';
import { FreeJsPattern2Component } from './free-js-pattern2/free-js-pattern2.component';
import { FreeJsPattern5Component } from './free-js-pattern5/free-js-pattern5.component';
import { FreeJsKgPoundProjectComponent } from './free-js-kg-pound-project/free-js-kg-pound-project.component';
import { FreeJsRandomQuoteProjectComponent } from './free-js-random-quote-project/free-js-random-quote-project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    FreeJsEvenOrOddComponent,
    FreeJsReverseOfNumberComponent,
    FreeJsPattern1Component,
    FreeJsPattern2Component,
    FreeJsPattern5Component,
    FreeJsKgPoundProjectComponent,
    FreeJsRandomQuoteProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'free-version/free-javascript/free-js-even-or-odd', component: FreeJsEvenOrOddComponent},
      { path: 'free-version/free-javascript/free-js-reverse-of-number', component: FreeJsReverseOfNumberComponent},
      { path: 'free-version/free-javascript/free-js-pattern1', component: FreeJsPattern1Component},
      { path: 'free-version/free-javascript/free-js-pattern2', component: FreeJsPattern2Component},
      { path: 'free-version/free-javascript/free-js-pattern5', component: FreeJsPattern5Component},
      { path: 'free-version/free-javascript/free-js-kg-pound-project', component: FreeJsKgPoundProjectComponent},
      { path: 'free-version/free-javascript/free-js-random-quote-project', component: FreeJsRandomQuoteProjectComponent}

    ])
  ]
})
export class FreeJavascriptModule { }
