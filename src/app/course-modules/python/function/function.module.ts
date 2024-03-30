import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FunctionIntroComponent } from './function-intro/function-intro.component';
import { PatternComponent } from './pattern/pattern.component';
import { ReverseNumberComponent } from './reverse-number/reverse-number.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { SwapNumbersComponent } from './swap-numbers/swap-numbers.component';
import { Pattern1Component } from './pattern1/pattern1.component';



@NgModule({
  declarations: [
    FunctionIntroComponent,
    PatternComponent,
    ReverseNumberComponent,
    PrimeNumberComponent,
    SwapNumbersComponent,
    Pattern1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/function/function-intro', component: FunctionIntroComponent },
      { path:'python/function/pattern',component:PatternComponent},
      { path:'python/function/reverse-number',component:ReverseNumberComponent},
      { path:'python/function/prime-number',component:PrimeNumberComponent},
      { path:'python/function/swap-number',component:SwapNumbersComponent},
      { path:'python/function/pattern1', component:Pattern1Component}
 
   
    ])
  ]
})
export class FunctionModule { }
