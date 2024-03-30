import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { TypesComponent } from './types/types.component';
import { ClassComponent } from './class/class.component';
import { RenderingFlowComponent } from './rendering-flow/rendering-flow.component';



@NgModule({
  declarations: [
    TypesComponent,
    ClassComponent,
    RenderingFlowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/class-components/class', component: ClassComponent },
      { path: 'react/class-components/types', component:  TypesComponent},
      { path: 'react/class-components/rendering-flow', component: RenderingFlowComponent },
   
    ])
  ]
})
export class ClassComponentsModule { }
