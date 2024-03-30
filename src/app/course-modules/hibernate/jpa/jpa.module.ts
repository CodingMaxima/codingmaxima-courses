import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoComponent } from './into/into.component';
import { RelationsComponent } from './relations/relations.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';



@NgModule({
  declarations: [
    IntoComponent,
    RelationsComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/jpa/into", component:IntoComponent},
      {path:"hibernate/jpa/relations", component:RelationsComponent},
      {path:"hibernate/jpa/example1", component:Example1Component},
      {path:"hibernate/jpa/example2", component:Example2Component}

    ])
  ]
})
export class JpaModule { }
