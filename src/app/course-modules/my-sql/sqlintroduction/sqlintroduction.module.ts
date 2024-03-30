import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysqlIntroComponent } from './mysql-intro/mysql-intro.component';
import { SqlDatatypesComponent } from './sql-datatypes/sql-datatypes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AndornotComponent } from './andornot/andornot.component';



@NgModule({
  declarations: [
    MysqlIntroComponent,
    SqlDatatypesComponent,
    AndornotComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/sqlintroduction/mysql-intro', component:  MysqlIntroComponent},
      { path: 'my-sql/sqlintroduction/sql-datatypes', component: SqlDatatypesComponent },
      { path: 'my-sql/sqlintroduction/andornot', component: AndornotComponent }
    ])
  ]
})
export class SqlintroductionModule { }
