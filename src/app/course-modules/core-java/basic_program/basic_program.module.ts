import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmstrongNumberComponent } from './amstrong-number/amstrong-number.component';
import { AutomorphicNumberComponent } from './automorphic-number/automorphic-number.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibinocciSeriesComponent } from './fibinocci-series/fibinocci-series.component';
import { GraterNumberComponent } from './grater-number/grater-number.component';
import { NeonNumberComponent } from './neon-number/neon-number.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { PerfectNumberComponent } from './perfect-number/perfect-number.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { ReverseNumberComponent } from './reverse-number/reverse-number.component';
import { SmallerNumberComponent } from './smaller-number/smaller-number.component';
import { SpyNumberComponent } from './spy-number/spy-number.component';
import { StrongNumberComponent } from './strong-number/strong-number.component';
import { SunnyNumberComponent } from './sunny-number/sunny-number.component';
import { TrimorphicNumberComponent } from './trimorphic-number/trimorphic-number.component';
import { WeightedSumOfDigitsComponent } from './weighted-sum-of-digits/weighted-sum-of-digits.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { TypeconversionComponent } from './typeconversion/typeconversion.component';
import { AsciiComponent } from './ascii/ascii.component';
import { SwaptwonumbersComponent } from './swaptwonumbers/swaptwonumbers.component';



@NgModule({
  declarations: [
    EvenOddComponent,
    GraterNumberComponent,
    SmallerNumberComponent,
    ReverseNumberComponent,
    PalindromeComponent,
    AmstrongNumberComponent,
    NeonNumberComponent,
    SpyNumberComponent,
    AutomorphicNumberComponent,
    FactorialComponent,
    PerfectNumberComponent,
    StrongNumberComponent,
    PrimeNumberComponent,
    FibinocciSeriesComponent,
    SunnyNumberComponent,
    TrimorphicNumberComponent,
    WeightedSumOfDigitsComponent,
    TypeconversionComponent,
    AsciiComponent,
    SwaptwonumbersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/basic_program/Even_or_Odd', component: EvenOddComponent },
      { path: 'core-java/basic_program/smaller_number', component: SmallerNumberComponent },
      { path: 'core-java/basic_program/grater_number', component: GraterNumberComponent },
      { path: 'core-java/basic_program/swaptwonumbers', component: SwaptwonumbersComponent },
      { path: 'core-java/basic_program/Reverse_of_number', component: ReverseNumberComponent },
      { path: 'core-java/basic_program/Palindrome', component: PalindromeComponent },
      { path: 'core-java/basic_program/Armstrong_number', component: AmstrongNumberComponent },
      { path: 'core-java/basic_program/Neon_number', component: NeonNumberComponent },
      { path: 'core-java/basic_program/SPY_number', component: SpyNumberComponent },
      { path: 'core-java/basic_program/Automorphic_number', component: AutomorphicNumberComponent },
      { path: 'core-java/basic_program/Factorial', component: FactorialComponent },
      { path: 'core-java/basic_program/Perfect_number', component: PerfectNumberComponent },
      { path: 'core-java/basic_program/Strong_Number', component: StrongNumberComponent },
      { path: 'core-java/basic_program/Prime_number', component: PrimeNumberComponent },
      { path: 'core-java/basic_program/Fibonacci_Series', component: FibinocciSeriesComponent },
      { path: 'core-java/basic_program/Sunny_Number', component: SunnyNumberComponent },
      { path: 'core-java/basic_program/Trimorphic_Number', component: TrimorphicNumberComponent },
      { path: 'core-java/basic_program/Weighted_Sum_of_Digits', component: WeightedSumOfDigitsComponent },
      { path: 'core-java/basic_program/typeconversion', component: TypeconversionComponent },
      { path: 'core-java/basic_program/ascii', component: AsciiComponent }

    ])
  ]
})
export class Basic_programModule { }