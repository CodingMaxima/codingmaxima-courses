import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { OopsComponent } from './oops/oops.component';



@NgModule({
  declarations: [
    OopsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/oops/oops',
        component:OopsComponent,
      },
    ])
  ]
})
export class OopsModule { }
