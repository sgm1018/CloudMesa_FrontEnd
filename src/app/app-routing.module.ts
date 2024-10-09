import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/AuthLayout/AuthLayout.component';
import { AuthPageComponent } from './pages/AuthPage/AuthPage.component';
import { MainLayoutComponent } from './layouts/MainLayout/MainLayout.component';
import { MainPageComponent } from './pages/MainPage/MainPage.component';
import { PruebasLayoutComponent } from './layouts/PruebasLayout/PruebasLayout.component';

const routes: Routes = [

  {path: 'login', component: AuthLayoutComponent,  children:[
    {path: "", component: AuthPageComponent}
  ]},
  {path: 'main', component: MainLayoutComponent,  children:[
    {path: "", component: MainPageComponent}
  ]},
  {path: 'pruebas', component: PruebasLayoutComponent,  children:[
    {path: "", component: PruebasLayoutComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
