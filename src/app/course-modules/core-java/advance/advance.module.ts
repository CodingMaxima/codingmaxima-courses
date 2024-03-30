import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ComparatorComparableComponent } from './comparator-comparable/comparator-comparable.component';
import { LinkedlistComponent } from './linkedlist/linkedlist.component';
import { GenericClassesComponent } from './generic-classes/generic-classes.component';
import { Java8Component } from './java8/java8.component';



@NgModule({
  declarations: [
    ComparatorComparableComponent,
    LinkedlistComponent,
    GenericClassesComponent,
    Java8Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/advance/comparator-comparable', component: ComparatorComparableComponent },
      { path: 'core-java/advance/linkedlist', component: LinkedlistComponent},
      { path: 'core-java/advance/generic-classes', component: GenericClassesComponent},
      { path: 'core-java/advance/java8', component: Java8Component}
    ])
  ]
})
export class AdvanceModule { }
