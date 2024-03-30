import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { PillsComponent } from './pills/pills.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TabsComponent,
    PillsComponent,
    AssignmentOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'webdesign/bootstrap-tabs/tabs', component:  TabsComponent},
      { path: 'webdesign/bootstrap-tabs/pills', component:  PillsComponent},
      { path: 'webdesign/bootstrap-tabs/assignment-one', component:  AssignmentOneComponent},
    ])
  ]
})
export class BootstrapTabsModule { }
