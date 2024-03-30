import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DecoratorsIntroComponent } from './decorators-intro/decorators-intro.component';
import { LoggingDecoratorComponent } from './logging-decorator/logging-decorator.component';
import { TimerDecoratorComponent } from './timer-decorator/timer-decorator.component';
import { AuthenticationDecoratorComponent } from './authentication-decorator/authentication-decorator.component';



@NgModule({
  declarations: [
    DecoratorsIntroComponent,
    LoggingDecoratorComponent,
    TimerDecoratorComponent,
    AuthenticationDecoratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/decorators/decorators-intro', component:  DecoratorsIntroComponent},
      { path: 'python/decorators/logging-decorator', component:  LoggingDecoratorComponent},
      { path: 'python/decorators/timer-decorator', component:  TimerDecoratorComponent},
      { path: 'python/decorators/authentication-decorator', component:  AuthenticationDecoratorComponent},
   
    ])
  ]
})
export class DecoratorsModule { }
