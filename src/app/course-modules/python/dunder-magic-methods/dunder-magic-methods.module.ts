import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DunderIntroComponent } from './dunder-intro/dunder-intro.component';
import { CarClassComponent } from './car-class/car-class.component';
import { PlaylistClassComponent } from './playlist-class/playlist-class.component';
import { PointClassComponent } from './point-class/point-class.component';



@NgModule({
  declarations: [
    DunderIntroComponent,
    CarClassComponent,
    PlaylistClassComponent,
    PointClassComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/dunder-magic-methods/dunder-intro', component: DunderIntroComponent },
      { path: 'python/dunder-magic-methods/car-class', component: CarClassComponent },
      { path: 'python/dunder-magic-methods/playlist-class', component: PlaylistClassComponent },
      { path: 'python/dunder-magic-methods/point-class', component: PointClassComponent },
   
    ])
  ]
})
export class DunderMagicMethodsModule { }
