import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';



@NgModule({
  declarations: [
    IntroComponent,
    BootstrapGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'webdesign/bootstrap/intro', component:  IntroComponent},
      { path: 'webdesign/bootstrap/grid', component:  BootstrapGridComponent},
    ])
  ]
})
export class BootstrapModule { }
