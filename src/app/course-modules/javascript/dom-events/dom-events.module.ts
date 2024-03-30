import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DomComponent } from './dom/dom.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    DomComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/dom-events/dom',
        component: DomComponent
      },
      {
        path: 'javascript/dom-events/events',
        component: EventsComponent
      },
    ]),
  ],
})
export class DomEventsModule { }
