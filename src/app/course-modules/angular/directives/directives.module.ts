import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { NgforNgifComponent } from './ngfor-ngif/ngfor-ngif.component';
import { NgclassNgstyleComponent } from './ngclass-ngstyle/ngclass-ngstyle.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HostlistnerComponent } from './hostlistner/hostlistner.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';



@NgModule({
  declarations: [
    NgforNgifComponent,
    NgclassNgstyleComponent,
    CustomDirectivesComponent,
    HostlistnerComponent,
    HostbindingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 
      {path: 'angular/directives/ngfor-ngif', component: NgforNgifComponent},
      {path: 'angular/directives/ngclass-ngstyle', component: NgclassNgstyleComponent},
      {path: 'angular/directives/custom-directives', component: CustomDirectivesComponent},
      {path: 'angular/directives/hostlistner', component: HostlistnerComponent},
      {path: 'angular/directives/hostbinding', component: HostbindingComponent}
    ])
  ]
})
export class DirectivesModule { }
