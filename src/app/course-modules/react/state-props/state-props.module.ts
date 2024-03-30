import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroConceptsComponent } from './intro-concepts/intro-concepts.component';
import { StateManagmentComponent } from './state-managment/state-managment.component';
import { PropDrillingComponent } from './prop-drilling/prop-drilling.component';



@NgModule({
  declarations: [
    IntroConceptsComponent,
    StateManagmentComponent,
    PropDrillingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/state-props/intro-concepts', component: IntroConceptsComponent },
      { path: 'react/state-props/state-managment', component: StateManagmentComponent },
      { path: 'react/state-props/prop-drilling', component: PropDrillingComponent },

    ])
  ]
})
export class StatePropsModule { }
