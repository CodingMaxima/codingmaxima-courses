import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnetooneComponent } from './onetoone/onetoone.component';
import { Otoexample1Component } from './otoexample1/otoexample1.component';
import { Otoexample2Component } from './otoexample2/otoexample2.component';
import { OnetomanyComponent } from './onetomany/onetomany.component';
import { Otmexample1Component } from './otmexample1/otmexample1.component';
import { Otmexample2Component } from './otmexample2/otmexample2.component';
import { ManytomanyComponent } from './manytomany/manytomany.component';
import { Mtmexample1Component } from './mtmexample1/mtmexample1.component';
import { Mtmexample2Component } from './mtmexample2/mtmexample2.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OnetooneComponent,
    Otoexample1Component,
    Otoexample2Component,
    OnetomanyComponent,
    Otmexample1Component,
    Otmexample2Component,
    ManytomanyComponent,
    Mtmexample1Component,
    Mtmexample2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/practicals/onetoone", component:OnetooneComponent},
      {path:"hibernate/practicals/otoexample1", component:Otoexample1Component},
      {path:"hibernate/practicals/otoexample2", component:Otoexample2Component},
      {path:"hibernate/practicals/onetomany", component:OnetomanyComponent},
      {path:"hibernate/practicals/otmexample1", component:Otmexample1Component},
      {path:"hibernate/practicals/otmexample2", component:Otmexample2Component},
      {path:"hibernate/practicals/manytomany", component:ManytomanyComponent},
      {path:"hibernate/practicals/mtmexample1", component:Mtmexample1Component},
      {path:"hibernate/practicals/mtmexample2", component:Mtmexample2Component}
    ])
  ]
})
export class PracticalsModule { }
