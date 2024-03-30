import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeEvenOrOddComponent } from './free-even-or-odd/free-even-or-odd.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { FreeReverseNumberComponent } from './free-reverse-number/free-reverse-number.component';
import { FreePrimeNumberComponent } from './free-prime-number/free-prime-number.component';
import { FreePattern3Component } from './free-pattern3/free-pattern3.component';
import { FreeMethodWorkingComponent } from './free-method-working/free-method-working.component';
import { FreeFindElementArrayComponent } from './free-find-element-array/free-find-element-array.component';
import { FreeFindSecondmaxArrayComponent } from './free-find-secondmax-array/free-find-secondmax-array.component';
import { FreeStringPoolmemoryComponent } from './free-string-poolmemory/free-string-poolmemory.component';
import { FreeVowelCountComponent } from './free-vowel-count/free-vowel-count.component';
import { FreeNumberOccuranceHashmapComponent } from './free-number-occurance-hashmap/free-number-occurance-hashmap.component';
import { FreeClassObjectComponent } from './free-class-object/free-class-object.component';
import { FreeClassRelationComponent } from './free-class-relation/free-class-relation.component';
import { FreeExceptionsComponent } from './free-exceptions/free-exceptions.component';
import { FreeMutliThreadingComponent } from './free-mutli-threading/free-mutli-threading.component';
import { FreePojoClassComponent } from './free-pojo-class/free-pojo-class.component';

@NgModule({
  declarations: [
    FreeEvenOrOddComponent,
    FreeReverseNumberComponent,
    FreePrimeNumberComponent,
    FreePattern3Component,
    FreeMethodWorkingComponent,
    FreeFindElementArrayComponent,
    FreeFindSecondmaxArrayComponent,
    FreeStringPoolmemoryComponent,
    FreeVowelCountComponent,
    FreeNumberOccuranceHashmapComponent,
    FreeClassObjectComponent,
    FreeClassRelationComponent,
    FreeExceptionsComponent,
    FreeMutliThreadingComponent,
    FreePojoClassComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'free-version/free-java/free-even-or-odd', component: FreeEvenOrOddComponent},
      { path: 'free-version/free-java/free-reverse-number', component: FreeReverseNumberComponent},
      { path: 'free-version/free-java/free-prime-number', component: FreePrimeNumberComponent},
      { path: 'free-version/free-java/free-pattern3', component:  FreePattern3Component},
      { path: 'free-version/free-java/free-method-working', component: FreeMethodWorkingComponent},
      { path: 'free-version/free-java/free-find-element-array', component: FreeFindElementArrayComponent},
      { path: 'free-version/free-java/free-find-secondmax-array', component: FreeFindSecondmaxArrayComponent},
      { path: 'free-version/free-java/free-string-poolmemory', component: FreeStringPoolmemoryComponent},
      { path: 'free-version/free-java/free-vowel-count', component: FreeVowelCountComponent},
      { path: 'free-version/free-java/free-number-occurance-hashmap', component: FreeNumberOccuranceHashmapComponent},
      { path: 'free-version/free-java/free-class-object', component: FreeClassObjectComponent},
      { path: 'free-version/free-java/free-class-relation', component: FreeClassRelationComponent,},
      { path: 'free-version/free-java/free-exceptions', component: FreeExceptionsComponent},
      { path: 'free-version/free-java/free-multi-threading', component: FreeMutliThreadingComponent},
      {path: 'free-version/free-java/free-pojo-class', component:FreePojoClassComponent}
   
    ])
  ]
})
export class FreeJavaModule { }
