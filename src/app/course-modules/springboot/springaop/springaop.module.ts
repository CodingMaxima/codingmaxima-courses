import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AopComponent } from './aop/aop.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    AopComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/springaop/aop', component: AopComponent},
      { path: 'springboot/springaop/example1', component: Example1Component},
      { path: 'springboot/springaop/example2', component: Example2Component}
    ])
  ]
})
export class SpringaopModule { }
