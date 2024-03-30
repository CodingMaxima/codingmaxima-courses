import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SlideShowComponent,
    AssignmentOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'webdesign/bootstrap-slide-show/slide-show', component:  SlideShowComponent},
      { path: 'webdesign/bootstrap-slide-show/assignment-one', component:  AssignmentOneComponent},
    ])
  ]
})
export class BootstrapSlideShowModule { }
