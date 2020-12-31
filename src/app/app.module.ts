import { JwtInterceptor } from './services/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
//import { EditeUserComponent } from './components/edite-user/edite-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    //AddUserComponent,
    ListUserComponent,
    //EditeUserComponent,
    NavbarComponent,
    LoginComponent,
    ListCustomersComponent,
    ListProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
       useClass: JwtInterceptor,
       multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
