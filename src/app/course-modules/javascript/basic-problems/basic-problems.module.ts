import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { ReverseNumberComponent } from './reverse-number/reverse-number.component';
import { FactorialComponent } from './factorial/factorial.component';
import { PrimeComponent } from './prime/prime.component';
import { Pattern1Component } from './pattern1/pattern1.component';
import { Pattern2Component } from './pattern2/pattern2.component';
import { Pattern3Component } from './pattern3/pattern3.component';
import { Pattern4Component } from './pattern4/pattern4.component';
import { Pattern5Component } from './pattern5/pattern5.component';
import { Pattern6Component } from './pattern6/pattern6.component';



@NgModule({
  declarations: [
    EvenOddComponent,
    ReverseNumberComponent,
    FactorialComponent,
    PrimeComponent,
    Pattern1Component,
    Pattern2Component,
    Pattern3Component,
    Pattern4Component,
    Pattern5Component,
    Pattern6Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'javascript/basic-problems/even-odd', component: EvenOddComponent},
      { path: 'javascript/basic-problems/reverse-number', component: ReverseNumberComponent},
      { path: 'javascript/basic-problems/factorial', component: FactorialComponent},
      { path: 'javascript/basic-problems/prime', component: PrimeComponent},
      { path: 'javascript/basic-problems/pattern1', component: Pattern1Component},
      { path: 'javascript/basic-problems/pattern2', component: Pattern2Component},
      { path: 'javascript/basic-problems/pattern3', component: Pattern3Component},
      { path: 'javascript/basic-problems/pattern4', component: Pattern4Component},
      { path: 'javascript/basic-problems/pattern5', component: Pattern5Component},
      { path: 'javascript/basic-problems/pattern6', component: Pattern6Component},
    

    ])
  ]
})
export class BasicProblemsModule { }
