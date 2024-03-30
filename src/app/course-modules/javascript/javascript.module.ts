import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionModule } from './introduction/introduction.module';
import { BasicProblemsModule } from './basic-problems/basic-problems.module';
import { FunctionsModule } from './functions/functions.module';
import { ArraySetMapModule } from './array-set-map/array-set-map.module';
import { DomEventsModule } from './dom-events/dom-events.module';
import { ProjectsModule } from './projects/projects.module';
import { ObjectsModule } from './objects/objects.module';
import { OopsModule } from './oops/oops.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { AsynchronousModule } from './asynchronous/asynchronous.module';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    IntroductionModule,
    BasicProblemsModule,
    ArraySetMapModule,
    FunctionsModule,
    DomEventsModule,
ProjectsModule,
ObjectsModule,
OopsModule,
ErrorHandlingModule,
AsynchronousModule

  ]
})
export class JavascriptModule { }
