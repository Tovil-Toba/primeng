import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import { Theme } from '../models/theme';
import { Themes } from '../models/themes';
import { ThemeFilename } from '../models/theme-filename';

import { THEMES } from '../constants/themes';
import { DEFAULT_THEME_FILENAME } from '../constants/default-theme-filename';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  selectedTheme: ThemeFilename;
  selectedThemeImage: string;
  themes: Themes;

  constructor(private dbService: NgxIndexedDBService) {
    this.themes = THEMES;
  }

  changeTheme(filename: ThemeFilename): void {
    const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
    themeLink.href = `assets/css/themes/${filename}/theme.css`;
    this.setSelectedTheme(filename);
  }

  setDefaultTheme(): void {
    this.dbService.getByKey('settings', 'selectedTheme')
      .subscribe((item: { key: string; value: ThemeFilename }) => {
        const defaultThemeFilename = (item && item.value) || DEFAULT_THEME_FILENAME;
        this.changeTheme(defaultThemeFilename);
      });
  }

  setSelectedTheme(filename: ThemeFilename): void {
    Object.values(this.themes).forEach((themes: Theme[]) => {
      themes.forEach((theme: Theme) => {
        if (theme.filename === filename) {
          this.selectedTheme = theme.filename;
          this.selectedThemeImage = theme.image;
          this.dbService
            .update('settings', { key: 'selectedTheme', value: theme.filename })
            .subscribe();
          return;
        }
      });
    });
  }
}
