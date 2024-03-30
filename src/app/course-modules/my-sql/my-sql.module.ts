import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlintroductionModule } from './sqlintroduction/sqlintroduction.module';
import { CreatequeryModule } from './createquery/createquery.module';
import { InsertQueryModule } from './insert-query/insert-query.module';
import { SelectQueryModule } from './select-query/select-query.module';
import { AlterAndDropQueriesModule } from './alter-and-drop-queries/alter-and-drop-queries.module';
import { ConstraintsModule } from './constraints/constraints.module';
import { AggregatefunctionsModule } from './aggregatefunctions/aggregatefunctions.module';
import { OperatorsModule } from './operators/operators.module';
import { GroupbyhavingModule } from './groupbyhaving/groupbyhaving.module';
import { OthersModule } from './others/others.module';
import { RelationsModule } from './relations/relations.module';
import { JoinsModule } from './joins/joins.module';
import { AdvancejoinsModule } from './advancejoins/advancejoins.module';
import { IndexModule } from './index/index.module';
import { SharedModule } from '../../shared-module/shared.module';
import { DatabaseModule } from './database/database.module';
import { UpdateAndDeleteQueriesModule } from './update-and-delete-queries/update-and-delete-queries.module';
import { InterviewModule } from './interview/interview.module';
import { PagingModule } from './paging/paging.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    SqlintroductionModule,
    CreatequeryModule,
    InsertQueryModule,
    SelectQueryModule,
    AlterAndDropQueriesModule,
    ConstraintsModule,
    UpdateAndDeleteQueriesModule,
    AggregatefunctionsModule,
    OperatorsModule,
    GroupbyhavingModule,
    OthersModule,
    RelationsModule,
    JoinsModule,
    AdvancejoinsModule,
    IndexModule,
    DatabaseModule,
    InterviewModule,
    PagingModule
  ]
})
export class MySqlModule { }
