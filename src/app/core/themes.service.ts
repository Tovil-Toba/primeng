import { Injectable } from '@angular/core';

import { Theme } from '../shared/theme';
import { Themes } from '../shared/themes';
import themesJson from './../shared/themes.json';
import { DEFAULT_SELECTED_THEME } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  selectedTheme: string = DEFAULT_SELECTED_THEME;
  selectedThemeImage: string;
  themes: Themes;

  constructor() {
    this.themes = themesJson;
  }

  changeTheme(filename: string): void {
    if (!filename) {
      filename = DEFAULT_SELECTED_THEME;
    }
    const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
    themeLink.href = `assets/css/themes/${filename}/theme.css`;
    this.setSelectedTheme(filename);
  }

  setDefaultTheme(): void {
    this.changeTheme(DEFAULT_SELECTED_THEME);
  }

  setSelectedTheme(filename: string): void {
    Object.values(this.themes).forEach((themes: Theme[]) => {
      themes.forEach((theme: Theme) => {
        if (theme.filename === filename) {
          this.selectedTheme = theme.filename;
          this.selectedThemeImage = theme.image;
          return;
        }
      });
    });
  }
}
