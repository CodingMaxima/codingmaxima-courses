import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { PropertiesComponent } from './properties/properties.component';
import { EntityComponent } from './entity/entity.component';
import { PostmanComponent } from './postman/postman.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { SpringBeansAndComponentsComponent } from './spring-beans-and-components/spring-beans-and-components.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { SpringIocComponent } from './spring-ioc/spring-ioc.component';



@NgModule({
  declarations: [
    StartComponent,
    PropertiesComponent,
    EntityComponent,
    PostmanComponent,
    SpringBeansAndComponentsComponent,
    DependencyInjectionComponent,
    SpringIocComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/boot/start', component: StartComponent},
      { path: 'springboot/boot/properties', component: PropertiesComponent},
      { path: 'springboot/boot/postman', component: PostmanComponent},
      { path: 'springboot/boot/entity', component: EntityComponent},
      { path: 'springboot/boot/dependency-injection', component: DependencyInjectionComponent},
      { path: 'springboot/boot/spring-beans-and-components', component: SpringBeansAndComponentsComponent},
      { path: 'springboot/boot/spring-ioc', component: SpringIocComponent}

    ])
  ]
})
export class BootModule { }
