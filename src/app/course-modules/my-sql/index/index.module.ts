import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { PreDataComponent } from './pre-data/pre-data.component';



@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    PreDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-sql/index/index', component: IndexComponent},
      { path: 'my-sql/index/view', component: ViewComponent},
      { path: 'my-sql/index/pre-data', component: PreDataComponent},
    ])
  ]
})
export class IndexModule { }
