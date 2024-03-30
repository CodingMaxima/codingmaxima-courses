import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainofresponsibilitiesComponent } from './chainofresponsibilities/chainofresponsibilities.component';
import { ObserverComponent } from './observer/observer.component';
import { StateComponent } from './state/state.component';
import { StrategyComponent } from './strategy/strategy.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChainofresponsibilitiesComponent,
    ObserverComponent,
    StateComponent,
    StrategyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'lowl-level-design/behavioral/chainofresponsibilities', component: ChainofresponsibilitiesComponent},
      { path: 'lowl-level-design/behavioral/state', component: StateComponent},
      { path: 'lowl-level-design/behavioral/observer', component: ObserverComponent},
      { path: 'lowl-level-design/behavioral/strategy', component: StrategyComponent}
      
    ])
  ]
})
export class BehavioralModule { }
