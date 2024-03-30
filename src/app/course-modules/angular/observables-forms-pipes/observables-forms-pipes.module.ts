import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { TempleteDrivenComponent } from './templete-driven/templete-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesTransformOutputComponent } from './pipes-transform-output/pipes-transform-output.component';



@NgModule({
  declarations: [
    TempleteDrivenComponent,
    ReactiveFormsComponent,
    PipesTransformOutputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 
      {path: 'angular/observables-forms-pipes/templete-driven', component:TempleteDrivenComponent},
      {path: 'angular/observables-forms-pipes/reactive-forms', component:ReactiveFormsComponent},
      {path: 'angular/observables-forms-pipes/pipes-transform-output', component: PipesTransformOutputComponent}
    ])
  ]
})
export class ObservablesFormsPipesModule { }
