import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnomaliesComponent } from './anomalies/anomalies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RelationMappingComponent } from './relation-mapping/relation-mapping.component';
import { ManytomanyMappingComponent } from './manytomany-mapping/manytomany-mapping.component';
import { OnetomanyMappingComponent } from './onetomany-mapping/onetomany-mapping.component';
import { OnetooneMappingComponent } from './onetoone-mapping/onetoone-mapping.component';



@NgModule({
  declarations: [
    AnomaliesComponent,
    RelationMappingComponent,
    OnetooneMappingComponent,
    OnetomanyMappingComponent,
    ManytomanyMappingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/relations/anomalies', component: AnomaliesComponent},
      { path: 'my-sql/relations/relation-mapping', component: RelationMappingComponent},
      { path: 'my-sql/relations/onetoone-mapping', component: OnetooneMappingComponent},
      { path: 'my-sql/relations/onetomany-mapping', component: OnetomanyMappingComponent},
      { path: 'my-sql/relations/manytomany-mapping', component: ManytomanyMappingComponent}
    ])
  ]
})
export class RelationsModule { }
