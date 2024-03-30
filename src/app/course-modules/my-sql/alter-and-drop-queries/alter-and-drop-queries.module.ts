import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterEmployeeComponent } from './alter-employee/alter-employee.component';
import { AlterStudentComponent } from './alter-student/alter-student.component';
import { AlterMoviesComponent } from './alter-movies/alter-movies.component.html.component';
import { AlterAndDropIntroComponent } from './alter-and-drop-intro/alter-and-drop-intro.component';
import { DropExampleComponent } from './drop-example/drop-example.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PreDataComponent } from './pre-data/pre-data.component';



@NgModule({
  declarations: [
    AlterEmployeeComponent,
    AlterStudentComponent,
    AlterMoviesComponent, 
    PreDataComponent,
    DropExampleComponent,
    AlterAndDropIntroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-sql/alter-and-drop-queries/pre-data', component: PreDataComponent},
      { path: 'my-sql/alter-and-drop-queries/alter-and-drop-intro', component: AlterAndDropIntroComponent},
      { path: 'my-sql/alter-and-drop-queries/alter-employee', component: AlterEmployeeComponent },
      { path: 'my-sql/alter-and-drop-queries/alter-student', component: AlterStudentComponent },
      { path: 'my-sql/alter-and-drop-queries/alter-movies', component: AlterMoviesComponent },
      { path: 'my-sql/alter-and-drop-queries/drop-example', component: DropExampleComponent}
    ])
  ]
})
export class AlterAndDropQueriesModule { }
