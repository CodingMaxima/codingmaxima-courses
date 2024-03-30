import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { HandlingIntroComponent } from './handling-intro/handling-intro.component';



@NgModule({
  declarations: [
    HandlingIntroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/exception-handling/handling-intro', component: HandlingIntroComponent }
   
    ])
  ]
})
export class ExceptionHandlingModule { }
