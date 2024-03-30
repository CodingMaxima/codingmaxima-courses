import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PreDataComponent } from './pre-data/pre-data.component';
import { JoinsIntroComponent } from './joins-intro/joins-intro.component';
import { EmployeeLaptopComponent } from './employee-laptop/employee-laptop.component';
import { CountryCapitalComponent } from './country-capital/country-capital.component';
import { ApartmentFlatComponent } from './apartment-flat/apartment-flat.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';


@NgModule({
  declarations: [
    PreDataComponent,
    JoinsIntroComponent,
    EmployeeLaptopComponent,
    CountryCapitalComponent,
    ApartmentFlatComponent,
    EmployeeDesignationComponent,
    UserMoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/joins/pre-data', component: PreDataComponent},
      { path: 'my-sql/joins/joins-intro', component: JoinsIntroComponent},
      { path: 'my-sql/joins/employee-laptop', component: EmployeeLaptopComponent},
      { path: 'my-sql/joins/country-capital', component: CountryCapitalComponent},
      { path: 'my-sql/joins/apartment-flat', component: ApartmentFlatComponent},
      { path: 'my-sql/joins/employee-designation', component: EmployeeDesignationComponent},
      { path: 'my-sql/joins/user-movies', component: UserMoviesComponent},
    ])
  ]
})
export class JoinsModule { }
