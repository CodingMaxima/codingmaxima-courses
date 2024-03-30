import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DidMountComponent } from './did-mount/did-mount.component';
import { DidUpdateComponent } from './did-update/did-update.component';
import { WillUnmountComponent } from './will-unmount/will-unmount.component';
import { ShouldUpdateComponent } from './should-update/should-update.component';



@NgModule({
  declarations: [
    DidMountComponent,
    DidUpdateComponent,
    WillUnmountComponent,
    ShouldUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/components-lifecycle/did-mount', component: DidMountComponent},
      { path: 'react/components-lifecycle/did-update', component: DidUpdateComponent },
      { path: 'react/components-lifecycle/will-unmount', component: WillUnmountComponent},
      { path: 'react/components-lifecycle/should-update', component: ShouldUpdateComponent},
   
    ])
  ]
})
export class ComponentsLifecycleModule { }
