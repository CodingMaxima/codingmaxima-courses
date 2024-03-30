import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { GitinroModule } from './gitintro/gitinro.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    GitinroModule
  ]
})
export class GithubModule { }
