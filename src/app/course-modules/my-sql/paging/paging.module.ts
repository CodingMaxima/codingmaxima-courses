import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PagingComponent } from './paging/paging.component';
import { PreDataComponent } from './pre-data/pre-data.component';



@NgModule({
  declarations: [
    PagingComponent,
    PreDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-sql/paging/pre-data', component: PreDataComponent},
      { path: 'my-sql/index/paging', component: PagingComponent},

  ])
  ]
})
export class PagingModule { }
