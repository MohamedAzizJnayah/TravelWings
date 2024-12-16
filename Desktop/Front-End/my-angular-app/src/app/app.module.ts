import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Ajout du RouterModule si nécessaire
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    ReservationComponent,
    LoginComponent
    // Ajoutez ici d'autres composants
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule // Importation du RouterModule pour les routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
