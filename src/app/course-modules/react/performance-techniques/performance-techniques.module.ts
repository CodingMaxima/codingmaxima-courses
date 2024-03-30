import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DifferentTechniquesComponent } from './different-techniques/different-techniques.component';
import { WebVitalsComponent } from './web-vitals/web-vitals.component';



@NgModule({
  declarations: [
    DifferentTechniquesComponent,
    WebVitalsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/performance-techniques/different-techniques', component:  DifferentTechniquesComponent},
      { path: 'react/performance-techniques/web-vitals', component: WebVitalsComponent },
   
    ])
  ]
})
export class PerformanceTechniquesModule { }
