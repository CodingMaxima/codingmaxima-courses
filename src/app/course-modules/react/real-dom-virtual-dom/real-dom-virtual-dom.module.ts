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
      { path: 'react/real-dom-virtual-dom/concepts', component: ConceptsComponent }

   
    ])
  ]
})
export class RealDomVirtualDomModule { }
