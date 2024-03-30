import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoCmpComponent } from './video-cmp/video-cmp.component';
import { CompilerCmpComponent } from './compiler-cmp/compiler-cmp.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FooterComponent } from './footer-component/footer.component';
import { RouterModule } from '@angular/router';
import { UpcomingBatchesComponent } from './upcoming-batches/upcoming-batches.component';
import { VideoClassesComponent } from './video-classes/video-classes.component';

const components = [
  VideoCmpComponent,
  CompilerCmpComponent,
  FooterComponent,
  VideoClassesComponent
]

@NgModule({
  declarations: [
    ...components,
    UpcomingBatchesComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    CodeEditorModule.forRoot(),
    RouterModule.forRoot([
      { path: 'upcomming-batches', component:UpcomingBatchesComponent },
    ])
  ],
  exports: [
    ...components, FormsModule, CommonModule, RouterModule
  ]
})
export class SharedModule { }
