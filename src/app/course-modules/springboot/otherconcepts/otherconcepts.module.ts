import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LombokComponent } from './lombok/lombok.component';
import { DtosComponent } from './dtos/dtos.component';
import { MappersComponent } from './mappers/mappers.component';
import { SpringAcuatorComponent } from './spring-acuator/spring-acuator.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { LoggingComponent } from './logging/logging.component';



@NgModule({
  declarations: [
    LombokComponent,
    DtosComponent,
    MappersComponent,
    SpringAcuatorComponent,
    LoggingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/otherconcepts/lombok', component: LombokComponent},
      { path: 'springboot/otherconcepts/dtos', component: DtosComponent},
      { path: 'springboot/otherconcepts/mapper', component: MappersComponent},
      { path: 'springboot/otherconcepts/spring-acuator', component: SpringAcuatorComponent},
      { path: 'springboot/otherconcepts/logging', component: LoggingComponent}
    ])
  ]
})
export class OtherconceptsModule { }
