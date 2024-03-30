import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreComponent } from './pre/pre.component';
import { IntoComponent } from './into/into.component';
import { ConfigComponent } from './config/config.component';
import { DilectComponent } from './dilect/dilect.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PreComponent,
    IntoComponent,
    ConfigComponent,
    DilectComponent,
    Example1Component,
    Example2Component
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      {path:"hibernate/introduction/pre", component:PreComponent},
      {path:"hibernate/introduction/into", component:IntoComponent},
      {path:"hibernate/introduction/cofig", component:ConfigComponent},
      {path:"hibernate/introduction/dilect", component:DilectComponent},
      {path:"hibernate/introduction/example1", component:Example1Component},
      {path:"hibernate/introduction/example2", component:Example2Component}
    ])
  ]
})
export class IntroductionModule { }
