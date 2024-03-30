import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionintroComponent } from './exceptionintro/exceptionintro.component';
import { UserdefinedComponent } from './userdefined/userdefined.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    ExceptionintroComponent,
    UserdefinedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/exceptions/exceptionintro', component:ExceptionintroComponent},
      { path: 'core-java/exceptions/userdefined', component:UserdefinedComponent}
    ])
  ]
})
export class ExceptionsModule { }
