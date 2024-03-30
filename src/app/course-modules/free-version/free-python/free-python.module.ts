import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreePyEvenOrOddComponent } from './free-py-even-or-odd/free-py-even-or-odd.component';
import { FreePySmallerNumberComponent } from './free-py-smaller-number/free-py-smaller-number.component';
import { FreePyReverseOfNumberComponent } from './free-py-reverse-of-number/free-py-reverse-of-number.component';
import { FreePyFactorialComponent } from './free-py-factorial/free-py-factorial.component';
import { FreePyPattern4Component } from './free-py-pattern4/free-py-pattern4.component';
import { FreePyPattern11Component } from './free-py-pattern11/free-py-pattern11.component';
import { FreePyKeyOccuranceInArrayComponent } from './free-py-key-occurance-in-array/free-py-key-occurance-in-array.component';
import { FreePyVowelCountComponent } from './free-py-vowel-count/free-py-vowel-count.component';
import { FreePyNumberOccuranceComponent } from './free-py-number-occurance/free-py-number-occurance.component';
import { FreePyStudentClassComponent } from './free-py-student-class/free-py-student-class.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FreePyEvenOrOddComponent,
    FreePySmallerNumberComponent,
    FreePyReverseOfNumberComponent,
    FreePyFactorialComponent,
    FreePyPattern4Component,
    FreePyPattern11Component,
    FreePyKeyOccuranceInArrayComponent,
    FreePyVowelCountComponent,
    FreePyNumberOccuranceComponent,
    FreePyStudentClassComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'free-version/free-python/free-py-even-or-odd', component: FreePyEvenOrOddComponent},
      { path: 'free-version/free-python/free-py-smaller-number', component: FreePySmallerNumberComponent},
      { path: 'free-version/free-python/free-py-reverse-of-number', component: FreePyReverseOfNumberComponent},
      { path: 'free-version/free-python/free-py-factorial', component: FreePyFactorialComponent},
      { path: 'free-version/free-python/free-py-pattern4', component: FreePyPattern4Component},
      { path: 'free-version/free-python/free-py-pattern11', component: FreePyPattern11Component},
      { path: 'free-version/free-python/free-py-key-occurance-in-array', component: FreePyKeyOccuranceInArrayComponent},
      { path: 'free-version/free-python/free-py-vowel-count', component: FreePyVowelCountComponent},
      { path: 'free-version/free-python/free-py-number-occurance', component: FreePyNumberOccuranceComponent},
      { path: 'free-version/free-python/free-py-student-class', component: FreePyStudentClassComponent}
  ])
 ]
})
export class FreePythonModule { }
