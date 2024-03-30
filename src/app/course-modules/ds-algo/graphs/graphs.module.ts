import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { BfSofgraphComponent } from './bf-sofgraph/bf-sofgraph.component';
import { BipartiteGraphComponent } from './bipartite-graph/bipartite-graph.component';
import { DfssofgraphComponent } from './dfssofgraph/dfssofgraph.component';
import { DetectcycleComponent } from './detectcycle/detectcycle.component';
import { DetectcycleundirectedComponent } from './detectcycleundirected/detectcycleundirected.component';
import { DistancefromtheSourceComponent } from './distancefromthe-source/distancefromthe-source.component';
import { TopologicalsortComponent } from './topologicalsort/topologicalsort.component';
import { WordboggleComponent } from './wordboggle/wordboggle.component';
import { WordBoggleComponent } from './word-boggle/word-boggle.component';
import { WordSsearchComponent } from './word-ssearch/word-ssearch.component';



@NgModule({
  declarations: [
    BfSofgraphComponent,
    BipartiteGraphComponent,
    DfssofgraphComponent,
    DetectcycleComponent,
    DetectcycleundirectedComponent,
    DistancefromtheSourceComponent,
    TopologicalsortComponent,
    WordboggleComponent,
    WordBoggleComponent,
    WordSsearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/graph/bfSofgraph", component:BfSofgraphComponent},
      {path:"ds-algo/graph/bipartite-graph", component:BipartiteGraphComponent},
      {path:"ds-algo/graph/dfssofgraph", component:DfssofgraphComponent},
      {path:"ds-algo/graph/detectcycle", component:DetectcycleComponent},
      {path:"ds-algo/graph/detectcycleundirected", component:DetectcycleundirectedComponent},
      {path:"ds-algo/graph/distancefromtheSource", component:DistancefromtheSourceComponent},
      {path:"ds-algo/graph/topologicalsort", component:TopologicalsortComponent},
      {path:"ds-algo/graph/wordboggle", component:WordboggleComponent},
      {path:"ds-algo/graph/word-boggle", component:WordBoggleComponent},
      {path:"ds-algo/graph/word-ssearch", component:WordSsearchComponent},
      
      
      
      
    ])
  ]
})
export class GraphsModule { }
