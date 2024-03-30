import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PreDataComponent } from './pre-data/pre-data.component';
import { InnerQueriesComponent } from './inner-queries/inner-queries.component';
import { UnionComponent } from './union/union.component';
import { SortingComponent } from './sorting/sorting.component';
import { ExistComponent } from './exist/exist.component';



@NgModule({
  declarations: [
    PreDataComponent,
    InnerQueriesComponent,
    UnionComponent,
    SortingComponent,
    ExistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/others/pre-data', component: PreDataComponent},
      { path: 'my-sql/others/inner-queries', component: InnerQueriesComponent},
      { path: 'my-sql/others/union', component: UnionComponent},
      { path: 'my-sql/others/sorting', component: SortingComponent},
      { path: 'my-sql/others/exist', component: ExistComponent}

    ])
  ]
})
export class OthersModule { }
