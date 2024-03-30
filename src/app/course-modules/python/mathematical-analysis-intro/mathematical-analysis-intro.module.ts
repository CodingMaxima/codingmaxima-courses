import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AnalysisIntroComponent } from './analysis-intro/analysis-intro.component';
import { NumpyIntroComponent } from './numpy-intro/numpy-intro.component';
import { PandasIntroComponent } from './pandas-intro/pandas-intro.component';
import { NumpyExamplesComponent } from './numpy-examples/numpy-examples.component';
import { PandasExamplesComponent } from './pandas-examples/pandas-examples.component';



@NgModule({
  declarations: [
    AnalysisIntroComponent,
    NumpyIntroComponent,
    PandasIntroComponent,
    NumpyExamplesComponent,
    PandasExamplesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/mathematical-analysis-intro/analysis-intro', component:  AnalysisIntroComponent },
      { path: 'python/mathematical-analysis-intro/numpy-intro', component:  NumpyIntroComponent },
      { path: 'python/mathematical-analysis-intro/pandas-intro', component:  PandasIntroComponent },
      { path: 'python/mathematical-analysis-intro/numpy-examples', component:  NumpyExamplesComponent },
      { path: 'python/mathematical-analysis-intro/pandas-examples', component:  PandasExamplesComponent },
   
    ])
  ]
})
export class MathematicalAnalysisIntroModule { }
