import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppFlowComponent } from './app-flow/app-flow.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    AppFlowComponent,
    ConceptsComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/react-redux/introduction', component: IntroductionComponent },
      { path: 'react/react-redux/appflow', component: AppFlowComponent },
      { path: 'react/react-redux/concepts', component: ConceptsComponent },
      { path: 'react/react-redux/components', component: ComponentsComponent }

    ])
  ]
})
export class ReactReduxModule { }
