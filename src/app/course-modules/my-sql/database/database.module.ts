import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SelectdatabaseComponent } from './selectdatabase/selectdatabase.component';
import { DeletedatabaseComponent } from './deletedatabase/deletedatabase.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    CreateComponent,
    SelectdatabaseComponent,
    DeletedatabaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/database/create', component: CreateComponent },
      { path: 'my-sql/database/selectdatabase', component: SelectdatabaseComponent },
      { path: 'my-sql/database/deletedatabase', component: DeletedatabaseComponent }
    ])
  ]
})
export class DatabaseModule { }
