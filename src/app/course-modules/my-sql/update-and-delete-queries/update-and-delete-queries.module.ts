import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { PreupdatedataComponent } from './preupdatedata/preupdatedata.component';
import { DeleteQueriesComponent } from './delete-queries/delete-queries.component';



@NgModule({
  declarations: [
    UpdateemployeeComponent,
    UpdatestudentComponent,
    PreupdatedataComponent,
    DeleteQueriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/update-and-delete-queries/preupdatedata', component: PreupdatedataComponent },
      { path: 'my-sql/update-and-delete-queries/updateemployee', component: UpdateemployeeComponent },
      { path: 'my-sql/update-and-delete-queries/updatestudent', component: UpdatestudentComponent },
      { path: 'my-sql/update-and-delete-queries/delete-queries', component: DeleteQueriesComponent },

    ])
  ]
})
export class UpdateAndDeleteQueriesModule { }
