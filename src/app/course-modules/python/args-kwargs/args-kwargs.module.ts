import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ArgsKwargsIntroComponent } from './args-kwargs-intro/args-kwargs-intro.component';



@NgModule({
  declarations: [
    ArgsKwargsIntroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/args-kwargs/args-kwargs-intro', component: ArgsKwargsIntroComponent }

    ])
  ]
})
export class ArgsKwargsModule { }
