import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { MethodsAxiosComponent } from './methods-axios/methods-axios.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    MethodsAxiosComponent,
    InterceptorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/axios/introduction', component: IntroductionComponent },
      { path: 'react/axios/methods-axios', component: MethodsAxiosComponent },
      { path: 'react/axios/interceptors', component: InterceptorsComponent },
    ])
  ]
})
export class AxiosModule { }
