import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { RouterComponent } from './router/router.component';
import { RouterComponentsComponent } from './router-components/router-components.component';
import { RouteComponent } from './route/route.component';
import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    RouterComponent,
    RouterComponentsComponent,
    RouteComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/react-router/introduction', component: IntroductionComponent },
      { path: 'react/react-router/router', component: RouterComponent },
      { path: 'react/react-router/router-components', component: RouterComponentsComponent },
      { path: 'react/react-router/route', component: RouteComponent },
      { path: 'react/react-router/components', component: ComponentsComponent }

    ])
  ]
})
export class ReactRouterModule { }
