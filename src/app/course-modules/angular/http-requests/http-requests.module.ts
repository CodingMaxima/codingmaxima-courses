import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { SendingRequestsComponent } from './sending-requests/sending-requests.component';
import { HeaderErrorHandlingComponent } from './header-error-handling/header-error-handling.component';
import { AngmoduleLazyloadingComponent } from './angmodule-lazyloading/angmodule-lazyloading.component';



@NgModule({
  declarations: [
    InterceptorsComponent,
    SendingRequestsComponent,
    HeaderErrorHandlingComponent,
    AngmoduleLazyloadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 
      {path: 'angular/http-requests/interceptors', component:InterceptorsComponent},
      {path: 'angular/http-requests/sending-requests', component:SendingRequestsComponent},
      {path: 'angular/http-requests/header-error-handling', component:HeaderErrorHandlingComponent},
      {path: 'angular/http-requests/angmodule-lazyloading', component:AngmoduleLazyloadingComponent}

    ])
  ]
})
export class HttpRequestsModule { }
