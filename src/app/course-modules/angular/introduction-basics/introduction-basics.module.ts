import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { InstallationComponent } from './installation/installation.component';



@NgModule({
  declarations: [
    InstallationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 

      { path: 'angular/introduction-basics/installation', component: InstallationComponent }
    
    ])
  ]
})
export class IntroductionBasicsModule { }
