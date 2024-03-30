import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonComponent } from './singleton/singleton.component';
import { FactoryComponent } from './factory/factory.component';
import { AbstractfactoryComponent } from './abstractfactory/abstractfactory.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { BuilderComponent } from './builder/builder.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    SingletonComponent,
    FactoryComponent,
    AbstractfactoryComponent,
    PrototypeComponent,
    BuilderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'lowl-level-design/creational/singleton', component: SingletonComponent},
      { path: 'lowl-level-design/creational/factory', component: FactoryComponent},
      { path: 'lowl-level-design/creational/abstractfactory', component: AbstractfactoryComponent},
      { path: 'lowl-level-design/creational/builder', component: BuilderComponent},
      { path: 'lowl-level-design/creational/prototype', component: PrototypeComponent}

    ])
  ]
})
export class CreationalModule { }
