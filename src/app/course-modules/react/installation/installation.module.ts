import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { NodeNpmInstallComponent } from './node-npm-install/node-npm-install.component';
import { CreateProjectComponent } from './create-project/create-project.component';



@NgModule({
  declarations: [
    NodeNpmInstallComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/installation/node-npm-install', component: NodeNpmInstallComponent },
      { path: 'react/installation/create-project', component: CreateProjectComponent }
    ])
  ]
})
export class InstallationModule { }
