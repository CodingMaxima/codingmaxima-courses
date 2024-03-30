import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';

import { CourseCmModule } from './course-modules/courses-cm.module';
import { OperationsModule } from './operations-module/operations.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { 
  // APP_BASE_HREF,
  HashLocationStrategy, LocationStrategy 
} from '@angular/common';
import { GroupLogInModule } from './group-log-in-module/group-log-in.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CourseCmModule,
    OperationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    SharedModule,
    NgbModule,
    GroupLogInModule,
  ],
  providers: [
    // HashLocationStrategy is used for resolving refresh problem
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
