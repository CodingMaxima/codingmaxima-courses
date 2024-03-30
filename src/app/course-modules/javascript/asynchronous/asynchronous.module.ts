import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';



@NgModule({
  declarations: [
    AsynchronousComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/asynchronous/asynchronous',
        component:AsynchronousComponent,
      },
    ])
  ]
})
export class AsynchronousModule { }
