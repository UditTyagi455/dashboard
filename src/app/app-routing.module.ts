import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
   path: "",
   redirectTo: "/login",
   pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user",
    component: UserComponent,  
  },
  {
    path: "additem",
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
