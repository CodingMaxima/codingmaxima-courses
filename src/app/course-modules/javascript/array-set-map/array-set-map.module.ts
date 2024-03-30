import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ArraySetMapComponent } from './array-set-map/array-set-map.component';
import { ArraysComponent } from './arrays/arrays.component';
import { StringsComponent } from './strings/strings.component';
import { MapComponent } from './map/map.component';
import { SetComponent } from './set/set.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [
    ArraySetMapComponent,
    ArraysComponent,
    StringsComponent,
    MapComponent,
    SetComponent,
    DateTimeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'javascript/array-set-map/array-set-map',
        component: ArraySetMapComponent,
      },
      { path: 'javascript/array-set-map/arrays', component: ArraysComponent },
      { path: 'javascript/array-set-map/set', component: SetComponent },
      { path: 'javascript/array-set-map/map', component: MapComponent },
      { path: 'javascript/array-set-map/strings', component: StringsComponent },
      { path: 'javascript/array-set-map/date-time', component: DateTimeComponent },

    ]),
  ],
})
export class ArraySetMapModule {}
