import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MapComponent } from './views/map/map.component';
import { ThemesDropdownComponent } from './components/themes-dropdown/themes-dropdown.component';

import { MAP_CONFIG } from './constants/map-config';
import { DB_CONFIG } from './constants/db-config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    MapComponent,
    ThemesDropdownComponent
  ],
  imports: [
    AngularYandexMapsModule.forRoot(MAP_CONFIG),
    AppRoutingModule,
    BreadcrumbModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    MenubarModule,
    NgxIndexedDBModule.forRoot(DB_CONFIG),
    PanelModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
