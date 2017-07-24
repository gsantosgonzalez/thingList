import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Servicios
import { PerrosService } from './services/perros.service';

import { APP_ROUTING } from './app.routes';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftComponent } from './components/left/left.component';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';
import { CosasComponent } from './components/cosas/cosas.component';
import { PerrosComponent } from './components/perros/perros.component';
import { PerroInfoComponent } from './components/perro-info/perro-info.component'
 
@NgModule({
  imports:      [ BrowserModule, APP_ROUTING ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LeftComponent, HomeComponent, OtherComponent, CosasComponent, PerrosComponent, PerroInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PerrosService]
})
export class AppModule { }
