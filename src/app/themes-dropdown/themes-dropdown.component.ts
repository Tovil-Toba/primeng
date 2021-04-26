import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

import { ThemesService } from '../core/themes.service';
import { Theme } from '../shared/theme';

@Component({
  selector: 'app-themes-dropdown',
  templateUrl: './themes-dropdown.component.html',
  styleUrls: ['./themes-dropdown.component.css']
})
export class ThemesDropdownComponent implements OnInit {

  groupedThemes: SelectItemGroup[];

  constructor(private themesService: ThemesService) {
  }

  private getGroupedThemes(): void {
    this.groupedThemes = [];
    Object.entries(this.themesService.themes)
      .forEach(([key, themes]) => {
        const selectItemGroup: SelectItemGroup = {
          label: key,
          items: []
        };
        themes.forEach((theme: Theme) => {
          selectItemGroup.items.push(
            {
              label: theme.name,
              value: theme.filename,
              icon: theme.image
            }
          );
        });
        this.groupedThemes.push(selectItemGroup);
      });
  }

  changeTheme(event: {originalEvent: Event; value: string}): void {
    this.themesService.changeTheme(event.value);
  }

  ngOnInit() {
    this.getGroupedThemes();
  }

}
