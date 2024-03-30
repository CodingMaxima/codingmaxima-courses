import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { RenderingDomComponent } from './rendering-dom/rendering-dom.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    RenderingDomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/functional-components/introduction', component: IntroductionComponent },
      { path: 'react/functional-components/rendering-dom', component:  RenderingDomComponent},
   
    ])
  ]
})
export class FunctionalComponentsModule { }
