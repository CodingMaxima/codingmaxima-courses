import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared-module/shared.module';
import { SolidModule } from './solid/solid.module';
import { CreationalModule } from './creational/creational.module';
import { StructuralModule } from './structural/structural.module';
import { BehavioralModule } from './behavioral/behavioral.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SolidModule,
    CreationalModule,
    StructuralModule,
    BehavioralModule
  ]
})
export class LowlLevelDesignModule { }
