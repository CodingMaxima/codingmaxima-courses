import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FunctionComponent } from './function/function.component';


@NgModule({
  declarations: [
    FunctionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'javascript/functions/function', component: FunctionComponent },
    ])
  ]
})
export class FunctionsModule { }
