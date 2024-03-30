import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ReadFileComponent } from './read-file/read-file.component';
import { WriteFileComponent } from './write-file/write-file.component';




@NgModule({
  declarations: [
    IntroductionComponent,
    AssignmentComponent,
    ReadFileComponent,
    WriteFileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/file-handling/introduction', component:IntroductionComponent },
      { path: 'core-java/file-handling/assignment', component:AssignmentComponent },
      { path: 'core-java/file-handling/read-file', component:ReadFileComponent },
      { path: 'core-java/file-handling/write-file', component:WriteFileComponent }
    ],
    ),
  ]
})
export class FileHandlingModule { }
