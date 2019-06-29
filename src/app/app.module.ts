import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './register/register.component';
import {ComparValidatorDirective} from './shared/compar-validator.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {HeaderComponent} from './header/header.component';
import {MenuUserComponent} from './menu-user/menu-user.component';
import {AddParkingComponent} from './add-parking/add-parking.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DateValidatorDirective} from './shared/date-validator.directive';
import {DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {SearchParkingComponent} from './search-parking/search-parking.component';
import {ReservedLocationComponent} from './reserved-location/reserved-location.component';
import {TableSearchComponent} from './table-search/table-search.component';
import {TableSearchComponentServices} from './table-search/table-search.component.services';
import {UserService} from './user/user.component.services';
import {LoginComponentService} from './login/login.component.servicez';
import {AddParkingComponentService} from './add-parking/add-parking.component.services';
import {RegisterComponentService} from './register/register.component.services';
import {DataTableModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {TableUsersComponent} from './table-users/table-users.component';
import {TableUsersService} from './table-users/table-users.service';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import {ModalComponentService} from './modal/modal.component.service';
import {TableReservedService} from './table-reserved/table-reserved.service';
import {TableReservedComponent} from './table-reserved/table-reserved.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { HereMapComponent } from './here-map/here-map.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'add', component: AddParkingComponent},
  {path: 'search', component: SearchParkingComponent},
  {path: 'reserved-location', component: ReservedLocationComponent},
  {path: 'maps', component: MapsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ComparValidatorDirective,
    UserComponent,
    HeaderComponent,
    MenuUserComponent,
    AddParkingComponent,
    DateValidatorDirective,
    SearchParkingComponent,
    ReservedLocationComponent,
    TableSearchComponent,
    ModalComponent,
    TableUsersComponent,
    TableReservedComponent,
    MapsComponent,
    HereMapComponent,


  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    DataTableModule,
    TableModule,
    PaginatorModule,
    MatDialogModule,
    MatFormFieldModule,

  ],
  providers: [
    LoginComponentService,
    RegisterComponentService,
    AddParkingComponentService,
    ModalComponentService,
    UserService,
    TableSearchComponentServices,
    TableUsersService,
    TableReservedService,
    GoogleMapsAPIWrapper,
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
