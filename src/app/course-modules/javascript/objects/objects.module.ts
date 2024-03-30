import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ObjectsComponent } from './objects/objects.component';



@NgModule({
  declarations: [
    ObjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/objects/objects',
        component: ObjectsComponent,
      },
    ])
  ]
  })
export class ObjectsModule { 
  
}
