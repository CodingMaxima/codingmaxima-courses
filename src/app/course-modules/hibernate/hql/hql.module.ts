import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/hql/example1", component:Example1Component},
      {path:"hibernate/hql/example2", component:Example2Component},
      {path:"hibernate/hql/example3", component:Example3Component},
      {path:"hibernate/hql/example4", component:Example4Component},
    ])
  ]
})
export class HqlModule { }
