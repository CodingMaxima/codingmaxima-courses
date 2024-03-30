import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import {AssignmentOneComponent} from './assignment-one/assignment-one.component'



@NgModule({
  declarations: [
    IntroComponent,
    AssignmentOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'webdesign/css-animations/intro', component:  IntroComponent},
      { path: 'webdesign/css-animations/assignment-one', component:  AssignmentOneComponent}
    ])
  ]
})
export class CssAnimationsModule { }
