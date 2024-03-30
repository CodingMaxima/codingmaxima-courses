import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ConceptsComponent } from './concepts/concepts.component';



@NgModule({
  declarations: [
    ConceptsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/webpack-bable/concepts', component: ConceptsComponent }
     
    ])
  ]
})
export class WebpackBableModule { }
