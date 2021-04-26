import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, FilterService } from 'primeng/api';

import { ThemesService } from './core/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    FilterService,
    PrimeNGConfig
  ]
})
export class AppComponent implements OnInit {

  title = 'Prime';

  constructor(
    private primengConfig: PrimeNGConfig,
    private themesService: ThemesService
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.themesService.setDefaultTheme();
  }
}
