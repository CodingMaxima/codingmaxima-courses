import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ThreadLifeCycleComponent } from './thread-life-cycle/thread-life-cycle.component';
import { ThreadMethodsComponent } from './thread-methods/thread-methods.component';
import { SyncronizationComponent } from './syncronization/syncronization.component';
import { InterThreadCommunicationComponent } from './inter-thread-communication/inter-thread-communication.component';
import { DeadlockComponent } from './deadlock/deadlock.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    ThreadLifeCycleComponent,
    ThreadMethodsComponent,
    SyncronizationComponent,
    InterThreadCommunicationComponent,
    DeadlockComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/multi-threading/introduction', component:IntroductionComponent },
      { path: 'core-java/multi-threading/thread-life-cycle', component:ThreadLifeCycleComponent },
      { path: 'core-java/multi-threading/syncronization', component:SyncronizationComponent },
      { path: 'core-java/multi-threading/thread-methods', component:ThreadMethodsComponent },
      { path: 'core-java/multi-threading/inter-thread-communication', component:InterThreadCommunicationComponent },
      { path: 'core-java/multi-threading/deadlock', component:DeadlockComponent }

    ],
    ),
  ]
})
export class MultiThreadingModule { }
