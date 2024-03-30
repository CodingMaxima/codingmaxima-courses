import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterlinksNavigationComponent } from './routerlinks-navigation/routerlinks-navigation.component';
import { NavigatingProgramComponent } from './navigating-program/navigating-program.component';
import { FetchRouteParameterComponent } from './fetch-route-parameter/fetch-route-parameter.component';
import { QueryparamFragmentsComponent } from './queryparam-fragments/queryparam-fragments.component';
import { ChildRoutingComponent } from './child-routing/child-routing.component';
import { WildcardRoutesComponent } from './wildcard-routes/wildcard-routes.component';
import { RouteGaurdsComponent } from './route-gaurds/route-gaurds.component';
import { OutsourceRouteConfigComponent } from './outsource-route-config/outsource-route-config.component';



@NgModule({
  declarations: [
    RouterlinksNavigationComponent,
    NavigatingProgramComponent,
    FetchRouteParameterComponent,
    QueryparamFragmentsComponent,
    ChildRoutingComponent,
    WildcardRoutesComponent,
    RouteGaurdsComponent,
    OutsourceRouteConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([ 
      {path: 'angular/routing/routerlinks-navigation', component:RouterlinksNavigationComponent},
      {path: 'angular/routing/navigating-program', component:NavigatingProgramComponent},
      {path: 'angular/routing/fetch-route-parameter', component:FetchRouteParameterComponent},
      {path: 'angular/routing/queryparam-fragments', component:QueryparamFragmentsComponent},
      {path: 'angular/routing/child-routing', component: ChildRoutingComponent},
      {path: 'angular/routing/wildcard-routes', component: WildcardRoutesComponent},
      {path: 'angular/routing/route-gaurds', component: RouteGaurdsComponent},
      {path: 'angular/routing/outsource-route-config', component: OutsourceRouteConfigComponent}
    
    ])
  ]
})
export class RoutingModule { }
