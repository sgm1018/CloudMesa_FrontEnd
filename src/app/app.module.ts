import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layouts/MainLayout/MainLayout.component';
import { MainPageComponent } from './pages/MainPage/MainPage.component';
import { AuthPageComponent } from './pages/AuthPage/AuthPage.component';
import { AuthLayoutComponent } from './layouts/AuthLayout/AuthLayout.component';
import { SideBarComponent } from './components/SideBar/SideBar.component';
import { TopBarComponent } from './components/TopBar/TopBar.component';
import { PruebasLayoutComponent } from './layouts/PruebasLayout/PruebasLayout.component';
import { UserDropdownComponent } from './components/UserDropdown/UserDropdown.component';
import { NetworksComponent } from './components/Networks/Networks.component';
import { MainContentComponent } from './components/MainContent/MainContent.component';
import { BreadCumbsComponent } from './components/BreadCumbs/BreadCumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    AuthPageComponent,
    AuthLayoutComponent,
    SideBarComponent,
    TopBarComponent,
    PruebasLayoutComponent,
    UserDropdownComponent,
    NetworksComponent,
    MainContentComponent,
    BreadCumbsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
