import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/MyComponents/home/home.component';
import {LoginComponent} from 'src/app/MyComponents/login/login.component';
import {MovieComponent} from 'src/app/MyComponents/movie/movie.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'movie/:type/:id',component:MovieComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
