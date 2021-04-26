import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesDropdownComponent } from './themes-dropdown/themes-dropdown.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MAP_CONFIG } from './shared/constants';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ThemesDropdownComponent,
    MapComponent,
    HomeComponent
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
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
