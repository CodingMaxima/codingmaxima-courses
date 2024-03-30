import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { HierarchicalInjectorComponent } from './hierarchical-injector/hierarchical-injector.component';
import { CrossCompCommunicationComponent } from './cross-comp-communication/cross-comp-communication.component';
import { DiffwaysInjServicesComponent } from './diffways-inj-services/diffways-inj-services.component';



@NgModule({
  declarations: [
    HierarchicalInjectorComponent,
    CrossCompCommunicationComponent,
    DiffwaysInjServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 
      {path: 'angular/services-dependency-injection/hierarchical-injector', component: HierarchicalInjectorComponent},
      {path: 'angular/services-dependency-injection/cross-comp-communication', component: CrossCompCommunicationComponent},
      {path: 'angular/services-dependency-injection/diffways-inj-services', component: DiffwaysInjServicesComponent}
    
    ])
  ]
})
export class ServicesDependencyInjectionModule { }
