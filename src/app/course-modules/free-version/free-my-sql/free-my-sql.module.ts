import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { FreeDatatypesComponent } from './free-datatypes/free-datatypes.component';
import { FreeDatabaseComponent } from './free-database/free-database.component';
import { FreeCreateTableComponent } from './free-create-table/free-create-table.component';
import { FreeInsertComponent } from './free-insert/free-insert.component';
import { FreeSelectQueryComponent } from './free-select-query/free-select-query.component';
import { FreeAlterDropComponent } from './free-alter-drop/free-alter-drop.component';
import { FreeUpdateDeleteComponent } from './free-update-delete/free-update-delete.component';
import { FreeAggregateComponent } from './free-aggregate/free-aggregate.component';
import { FreeOperatorsComponent } from './free-operators/free-operators.component';
import { FreeConsraintsComponent } from './free-consraints/free-consraints.component';
import { FreeGroupbyHavingComponent } from './free-groupby-having/free-groupby-having.component';
import { FreeOthersComponent } from './free-others/free-others.component';

@NgModule({
  declarations: [
    FreeDatatypesComponent,
    FreeDatabaseComponent,
    FreeCreateTableComponent,
    FreeInsertComponent,
    FreeSelectQueryComponent,
    FreeAlterDropComponent,
    FreeUpdateDeleteComponent,
    FreeAggregateComponent,
    FreeOperatorsComponent,
    FreeConsraintsComponent,
    FreeGroupbyHavingComponent,
    FreeOthersComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'free-version/free-my-sql/free-datatypes', component: FreeDatatypesComponent },
      { path: 'free-version/free-my-sql/free-database ', component:  FreeDatabaseComponent },
      { path: 'free-version/free-my-sql/free-create-table', component: FreeCreateTableComponent },
      { path: 'free-version/free-my-sql/free-insert', component: FreeInsertComponent },
      { path: 'free-version/free-my-sql/free-select-query', component: FreeSelectQueryComponent },
      { path: 'free-version/free-my-sql/free-alter-drop', component: FreeAlterDropComponent },
      { path: 'free-version/free-my-sql/free-update-delete', component: FreeUpdateDeleteComponent },
      { path: 'free-version/free-my-sql/free-aggregate', component: FreeAggregateComponent },
      { path: 'free-version/free-my-sql/free-operators', component: FreeOperatorsComponent },
      { path: 'free-version/free-my-sql/free-consraints', component: FreeConsraintsComponent },
      { path: 'free-version/free-my-sql/free-groupby-having', component: FreeGroupbyHavingComponent },
      { path: 'free-version/free-my-sql/free-others', component: FreeOthersComponent },
    ])
  ]
})
export class FreeMySqlModule { }
