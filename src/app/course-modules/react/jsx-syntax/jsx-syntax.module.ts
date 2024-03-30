import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { RenderingElementsComponent } from './rendering-elements/rendering-elements.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    RenderingElementsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/jsx-syntax/introduction', component: IntroductionComponent },
      { path: 'react/jsx-syntax/rendering-elements', component: RenderingElementsComponent },
   
    ])
  ]
})
export class JsxSyntaxModule { }
