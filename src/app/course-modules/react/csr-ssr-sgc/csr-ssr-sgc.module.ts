import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DiffTypesComponent } from './diff-types/diff-types.component';
import { ConceptsComponent } from './concepts/concepts.component';



@NgModule({
  declarations: [
    DiffTypesComponent,
    ConceptsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/csr-ssr-sgc/diff-types', component:  DiffTypesComponent },
      { path: 'react/csr-ssr-sgc/concepts', component: ConceptsComponent },
   
    ])
  ]
})
export class CsrSsrSgcModule { }
