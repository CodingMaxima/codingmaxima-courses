import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pattren1Component } from './pattren1/pattren1.component';
import { Pattren10Component } from './pattren10/pattren10.component';
import { Pattren11Component } from './pattren11/pattren11.component';
import { Pattren12Component } from './pattren12/pattren12.component';
import { Pattren13Component } from './pattren13/pattren13.component';
import { Pattren14Component } from './pattren14/pattren14.component';
import { Pattren15Component } from './pattren15/pattren15.component';
import { Pattren2Component } from './pattren2/pattren2.component';
import { Pattren3Component } from './pattren3/pattren3.component';
import { Pattren4Component } from './pattren4/pattren4.component';
import { Pattren5Component } from './pattren5/pattren5.component';
import { Pattren6Component } from './pattren6/pattren6.component';
import { Pattren7Component } from './pattren7/pattren7.component';
import { Pattren8Component } from './pattren8/pattren8.component';
import { Pattren9Component } from './pattren9/pattren9.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { Pattren16Component } from './pattren16/pattren16.component';



@NgModule({
  declarations: [
    Pattren1Component,
    Pattren2Component,
    Pattren3Component,
    Pattren4Component,
    Pattren5Component,
    Pattren6Component,
    Pattren7Component,
    Pattren8Component,
    Pattren9Component,
    Pattren10Component,
    Pattren11Component,
    Pattren12Component,
    Pattren13Component,
    Pattren14Component,
    Pattren15Component,
    Pattren16Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/pattren/pattren1', component: Pattren1Component },
      { path: 'core-java/pattren/pattren2', component: Pattren2Component },
      { path: 'core-java/pattren/pattren3', component: Pattren3Component },
      { path: 'core-java/pattren/pattren4', component: Pattren4Component },
      { path: 'core-java/pattren/pattren5', component: Pattren5Component },
      { path: 'core-java/pattren/pattren6', component: Pattren6Component },
      { path: 'core-java/pattren/pattren7', component: Pattren7Component },
      { path: 'core-java/pattren/pattren8', component: Pattren8Component },
      { path: 'core-java/pattren/pattren9', component: Pattren9Component },
      { path: 'core-java/pattren/pattren10', component: Pattren10Component },
      { path: 'core-java/pattren/pattren11', component: Pattren11Component },
      { path: 'core-java/pattren/pattren12', component: Pattren12Component },
      { path: 'core-java/pattren/pattren13', component: Pattren13Component },
      { path: 'core-java/pattren/pattren14', component: Pattren14Component },
      { path: 'core-java/pattren/pattren15', component: Pattren15Component },
      { path: 'core-java/pattren/pattren16', component: Pattren16Component }
      
    ])
  ]
})
export class PattrenModule { }