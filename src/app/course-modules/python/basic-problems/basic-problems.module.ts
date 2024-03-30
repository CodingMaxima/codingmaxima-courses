import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { SmallerNumberComponent } from './smaller-number/smaller-number.component';
import { GreaterNumberComponent } from './greater-number/greater-number.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { ReverseNumberComponent } from './reverse-number/reverse-number.component';
import { PalindromeNumberComponent } from './palindrome-number/palindrome-number.component';
import { FactorialComponent } from './factorial/factorial.component';
import { NeonNumberComponent } from './neon-number/neon-number.component';
import { ArmstrongNumberComponent } from './armstrong-number/armstrong-number.component';
import { StrongNumberComponent } from './strong-number/strong-number.component';
import { PerfectNumberComponent } from './perfect-number/perfect-number.component';
import { AutomorphicNumberComponent } from './automorphic-number/automorphic-number.component';
import { WeightedSumComponent } from './weighted-sum/weighted-sum.component';
import { TypeConversionsComponent } from './type-conversions/type-conversions.component';
import { AsciiValuesComponent } from './ascii-values/ascii-values.component';
import { FibonacciSeriesComponent } from './fibonacci-series/fibonacci-series.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    EvenOddComponent,
    SmallerNumberComponent,
    GreaterNumberComponent,
    PrimeNumberComponent,
    ReverseNumberComponent,
    PalindromeNumberComponent,
    FactorialComponent,
    NeonNumberComponent,
    ArmstrongNumberComponent,
    StrongNumberComponent,
    PerfectNumberComponent,
    AutomorphicNumberComponent,
    WeightedSumComponent,
    TypeConversionsComponent,
    AsciiValuesComponent,
    FibonacciSeriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'python/basic-problems/even-odd', component: EvenOddComponent},
      { path: 'python/basic-problems/smaller-number', component: SmallerNumberComponent},
      { path: 'python/basic-problems/greater-number', component: GreaterNumberComponent},
      { path: 'python/basic-problems/reverse-number', component: ReverseNumberComponent},
      { path: 'python/basic-problems/palindrome-number', component: PalindromeNumberComponent},
      { path: 'python/basic-problems/armstrong-number', component: ArmstrongNumberComponent},
      { path: 'python/basic-problems/neon-number', component: NeonNumberComponent},
      { path: 'python/basic-problems/factorial', component: FactorialComponent},
      { path: 'python/basic-problems/prime-number', component: PrimeNumberComponent},
      { path: 'python/basic-problems/perfect-number', component: PerfectNumberComponent},
      { path: 'python/basic-problems/strong-number', component: StrongNumberComponent},
      { path: 'python/basic-problems/fibonacci-series', component: FibonacciSeriesComponent},
      { path: 'python/basic-problems/automorphic-number', component: AutomorphicNumberComponent},
      { path: 'python/basic-problems/weighted-sum', component: WeightedSumComponent},
      { path: 'python/basic-problems/type-conversions', component: TypeConversionsComponent},
      { path: 'python/basic-problems/ascii-values', component: AsciiValuesComponent},

    ])
  ]
})
export class BasicProblemsModule { }
