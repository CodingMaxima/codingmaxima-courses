import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { UseComponent } from './use/use.component';
import { CustomHooksComponent } from './custom-hooks/custom-hooks.component';
import { HandlingStatesPropsComponent } from './handling-states-props/handling-states-props.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    UseComponent,
    CustomHooksComponent,
    HandlingStatesPropsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/react-hooks/introduction', component: IntroductionComponent  },
      { path: 'react/react-hooks/use', component: UseComponent  },
      { path: 'react/react-hooks/custom-hooks', component: CustomHooksComponent },
      { path: 'react/react-hooks/handlingstates-props', component: HandlingStatesPropsComponent }
   
    ])
  ]
})
export class ReactHooksModule { }
