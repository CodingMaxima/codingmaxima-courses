import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterComponent } from './adapter/adapter.component';
import { FacadeComponent } from './facade/facade.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdapterComponent,
    FacadeComponent,
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'lowl-level-design/structural/adapter', component: AdapterComponent},
      { path: 'lowl-level-design/structural/decorator', component: DecoratorComponent},
      { path: 'lowl-level-design/structural/facade', component: FacadeComponent}

    ])
  ]
})
export class StructuralModule { }
