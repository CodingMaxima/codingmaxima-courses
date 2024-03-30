import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwowayDataBindingComponent } from './twoway-data-binding/twoway-data-binding.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { LocalReferencesComponent } from './local-references/local-references.component';
import { ComponentLifecycleHooksComponent } from './component-lifecycle-hooks/component-lifecycle-hooks.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayDataBindingComponent,
    ViewEncapsulationComponent,
    LocalReferencesComponent,
    ComponentLifecycleHooksComponent,
    InterpolationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'angular/components/data-binding', component: DataBindingComponent },
      { path: 'angular/components/interpolation', component: InterpolationComponent },
      { path: 'angular/components/property-binding', component: PropertyBindingComponent },
      { path: 'angular/components/event-binding', component: EventBindingComponent },
      { path: 'angular/components/twoway-data-binding', component: TwowayDataBindingComponent },
      { path: 'angular/components/view-encapsulation', component: ViewEncapsulationComponent },
      { path: 'angular/components/local-references', component: LocalReferencesComponent },
      { path: 'angular/components/component-lifecycle-hooks', component: ComponentLifecycleHooksComponent },
      
    ])
  ]
})
export class ComponentsModule { }
