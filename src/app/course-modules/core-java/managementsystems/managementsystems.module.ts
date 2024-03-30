import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdbranchmngComponent } from './stdbranchmng/stdbranchmng.component';
import { EmpdesgmngComponent } from './empdesgmng/empdesgmng.component';
import { ClgbranchmngComponent } from './clgbranchmng/clgbranchmng.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    StdbranchmngComponent,
    EmpdesgmngComponent,
    ClgbranchmngComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/managementsystem/stdbranchmng', component:StdbranchmngComponent},
      { path: 'core-java/managementsystem/clgbranchmng', component:ClgbranchmngComponent},
      { path: 'core-java/managementsystem/empdesgmng', component:EmpdesgmngComponent},
    ])
  ]
})
export class ManagementsystemsModule { }
