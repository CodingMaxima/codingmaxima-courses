import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { UseMiddlewareComponent } from './use-middleware/use-middleware.component';
import { TypesAdvComponent } from './types-adv/types-adv.component';
import { ReduxSagaComponent } from './redux-saga/redux-saga.component';



@NgModule({
  declarations: [
    UseMiddlewareComponent,
    TypesAdvComponent,
    ReduxSagaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/middleware/use-middleware', component: UseMiddlewareComponent },
      { path: 'react/middleware/types-adv', component: TypesAdvComponent },
      { path: 'react/middleware/redux-saga', component:  ReduxSagaComponent }
   
    ])
  ]
})
export class MiddlewareModule { }
