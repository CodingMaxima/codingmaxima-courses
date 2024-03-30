import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RefsComponent } from './refs/refs.component';
import { HigherOrderCompComponent } from './higher-order-comp/higher-order-comp.component';
import { MemoizationComponent } from './memoization/memoization.component';
import { ConditionalRenderComponent } from './conditional-render/conditional-render.component';
import { ListsKeysComponent } from './lists-keys/lists-keys.component';
import { HandlingEventsComponent } from './handling-events/handling-events.component';
import { FormsComponent } from './forms/forms.component';
import { ForwardRefsComponent } from './forward-refs/forward-refs.component';
import { RenderPropsFragmentsComponent } from './render-props-fragments/render-props-fragments.component';
import { OptimizingCodeSplitingComponent } from './optimizing-code-spliting/optimizing-code-spliting.component';



@NgModule({
  declarations: [
    RefsComponent,
    HigherOrderCompComponent,
    MemoizationComponent,
    ConditionalRenderComponent,
    ListsKeysComponent,
    HandlingEventsComponent,
    FormsComponent,
    ForwardRefsComponent,
    RenderPropsFragmentsComponent,
    OptimizingCodeSplitingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/refs-hoc-memoization/refs', component: RefsComponent },
      { path: 'react/refs-hoc-memoization/higher-order-comp', component: HigherOrderCompComponent },
      { path: 'react/refs-hoc-memoization/memoization', component: MemoizationComponent },
      { path: 'react/refs-hoc-memoization/conditional-render', component: ConditionalRenderComponent },
      { path: 'react/refs-hoc-memoization/lists-keys', component: ListsKeysComponent },
      { path: 'react/refs-hoc-memoization/handling-events', component: HandlingEventsComponent },
      { path: 'react/refs-hoc-memoization/forms', component: FormsComponent },
      { path: 'react/refs-hoc-memoization/forward-refs', component: ForwardRefsComponent },
      { path: 'react/refs-hoc-memoization/render-props-fragments', component: RenderPropsFragmentsComponent },
      { path: 'react/refs-hoc-memoization/optimizing-code-spliting', component: OptimizingCodeSplitingComponent },


    ])
  ]
})
export class RefsHocMemoizationModule { }
