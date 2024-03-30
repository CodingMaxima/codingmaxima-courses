import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FilehandlingIntroComponent } from './filehandling-intro/filehandling-intro.component';
import { FileReadWriteComponent } from './file-read-write/file-read-write.component';
import { FileReadAppendComponent } from './file-read-append/file-read-append.component';
import { FileExceptionHandlingComponent } from './file-exception-handling/file-exception-handling.component';



@NgModule({
  declarations: [
    FilehandlingIntroComponent,
    FileReadWriteComponent,
    FileReadAppendComponent,
    FileExceptionHandlingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/file-handling/filehandling-intro', component: FilehandlingIntroComponent },
      { path: 'python/file-handling/file-read-write', component: FileReadWriteComponent },
      { path: 'python/file-handling/file-read-append', component: FileReadAppendComponent },
      { path: 'python/file-handling/file-exception-handling', component: FileExceptionHandlingComponent },
   
    ])
	
  ]
})
export class FileHandlingModule { }
