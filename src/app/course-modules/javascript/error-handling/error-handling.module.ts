import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ErrorHaldlingComponent } from './error-haldling/error-haldling.component';



@NgModule({
  declarations: [
    ErrorHaldlingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/error-handling/error-handling',
        component:ErrorHaldlingComponent,
      },
    ])
  ]
})
export class ErrorHandlingModule { }
