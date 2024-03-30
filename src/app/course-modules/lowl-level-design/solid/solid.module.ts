import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { OpenclosedComponent } from './openclosed/openclosed.component';
import { LiskovComponent } from './liskov/liskov.component';
import { InterfaceComponent } from './interface/interface.component';
import { DependencyComponent } from './dependency/dependency.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SingleComponent,
    OpenclosedComponent,
    LiskovComponent,
    InterfaceComponent,
    DependencyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'lowl-level-design/solid/single', component: SingleComponent},
      { path: 'lowl-level-design/solid/openclosed', component: OpenclosedComponent},
      { path: 'lowl-level-design/solid/liskov', component: LiskovComponent},
      { path: 'lowl-level-design/solid/interface', component: InterfaceComponent},
      { path: 'lowl-level-design/solid/dependency', component: DependencyComponent}
    ])
  ]
})
export class SolidModule { }
