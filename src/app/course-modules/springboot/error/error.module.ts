import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpStatuscodesComponent } from './http-statuscodes/http-statuscodes.component';
import { Erorhandlingproject1Component } from './erorhandlingproject1/erorhandlingproject1.component';
import { Erorhandlingproject2Component } from './erorhandlingproject2/erorhandlingproject2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    HttpStatuscodesComponent,
    Erorhandlingproject1Component,
    Erorhandlingproject2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/error/http-statuscodes', component: HttpStatuscodesComponent},
      { path: 'springboot/error/errorhandlingproject1', component: Erorhandlingproject1Component},
      { path: 'springboot/error/errorhandlingproject2', component: Erorhandlingproject2Component},
    ])
  ]
})
export class ErrorModule { }
