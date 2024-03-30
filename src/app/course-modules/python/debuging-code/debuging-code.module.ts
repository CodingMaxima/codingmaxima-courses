import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DebugingcodeIntroComponent } from './debugingcode-intro/debugingcode-intro.component';
import { DebugWithVscodeComponent } from './debug-with-vscode/debug-with-vscode.component';



@NgModule({
  declarations: [
    DebugingcodeIntroComponent,
    DebugWithVscodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/debuging-code/debugingcode-intro', component: DebugingcodeIntroComponent },
      { path: 'python/debuging-code/debug-with-vscode', component: DebugWithVscodeComponent }
   
    ])
  ]
})
export class DebugingCodeModule { }
