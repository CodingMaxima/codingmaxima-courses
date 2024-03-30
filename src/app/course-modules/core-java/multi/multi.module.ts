import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiintroComponent } from './multiintro/multiintro.component';
import { MatrixaddtionComponent } from './matrixaddtion/matrixaddtion.component';
import { MatrixsubtractionComponent } from './matrixsubtraction/matrixsubtraction.component';
import { MatrixmultiplicationComponent } from './matrixmultiplication/matrixmultiplication.component';
import { DiognalsumComponent } from './diognalsum/diognalsum.component';
import { MultiarraylistComponent } from './multiarraylist/multiarraylist.component';
import { MapwithlistComponent } from './mapwithlist/mapwithlist.component';
import { ListwithmapComponent } from './listwithmap/listwithmap.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    MultiintroComponent,
    MatrixaddtionComponent,
    MatrixsubtractionComponent,
    MatrixmultiplicationComponent,
    DiognalsumComponent,
    MultiarraylistComponent,
    MapwithlistComponent,
    ListwithmapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
        { path: 'core-java/multi/multiintro', component: MultiintroComponent},
        { path: 'core-java/multi/matrixaddtion', component: MatrixaddtionComponent},
        { path: 'core-java/multi/matrixsubtraction', component: MatrixsubtractionComponent},
        { path: 'core-java/multi/matrixmultiplication', component: MatrixmultiplicationComponent},
        { path: 'core-java/multi/diognalsum', component: DiognalsumComponent},
        { path: 'core-java/multi/multiarraylist', component: MultiarraylistComponent},
        { path: 'core-java/multi/listwithmap', component: ListwithmapComponent},
        { path: 'core-java/multi/mapwithlist', component: MapwithlistComponent}
    ])
  ]
})
export class MultiModule { }
