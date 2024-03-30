import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionBasicsModule } from './introduction-basics/introduction-basics.module';
import { ComponentsModule} from './components/components.module';
import { DirectivesModule} from './directives/directives.module';
import { ServicesDependencyInjectionModule} from './services-dependency-injection/services-dependency-injection.module';
import { RoutingModule} from './routing/routing.module';
import { ObservablesFormsPipesModule} from './observables-forms-pipes/observables-forms-pipes.module';
import { HttpRequestsModule} from './http-requests/http-requests.module';
import { DeployingAngularAppModule} from './deploying-angular-app/deploying-angular-app.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroductionBasicsModule,
    ComponentsModule,
    DirectivesModule,
    ServicesDependencyInjectionModule,
    RoutingModule,
    ObservablesFormsPipesModule,
    HttpRequestsModule,
    DeployingAngularAppModule
  ]
})
export class AngularModule { }
