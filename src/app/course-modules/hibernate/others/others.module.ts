import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FetchComponent } from './fetch/fetch.component';
import { GetloadComponent } from './getload/getload.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LifecycleComponent,
    FetchComponent,
    GetloadComponent,
    InterceptorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/others/lifecycle", component:LifecycleComponent},
      {path:"hibernate/others/fetch", component:FetchComponent},
      {path:"hibernate/others/getload", component:GetloadComponent},
      {path:"hibernate/others/interceptors", component:InterceptorsComponent}
    ])
  ]
})
export class OthersModule { }
