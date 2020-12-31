import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
//import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


const routes: Routes = [
  {path:"" , redirectTo:'/users' , pathMatch:'full'  ,// canActivate: [AuthGuard] 
},
  {path: "users", children:[
{path:"", component: ListUserComponent },
//{path:"ajouter", component: AddUserComponent },
] , //canActivate: [AuthGuard]
},

{
  path:"customer" , component: ListCustomersComponent   
},
{
  path:"product" , component: ListProductsComponent   
},
  {
    path:"login" , component: LoginComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
