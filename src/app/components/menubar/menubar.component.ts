import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ThemesService } from '../../core/themes.service';
import { Theme } from '../../interfaces/theme';
import { ThemeFilename } from '../../interfaces/theme-filename';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  constructor(private themesService: ThemesService) { }

  private get themesItems(): MenuItem[] {
    const menuItems: MenuItem[] = [];
    Object.entries(this.themesService.themes)
      .forEach(([key, themes]) => {
        const menuItem: MenuItem = {
          label: key,
          items: []
        };
        themes.forEach((theme: Theme) => {
          menuItem.items.push(
            {
              label: `
                <div class="p-d-flex p-ai-center">
                  <img
                    src="assets/images/themes/${theme.image}"
                    alt="${theme.name}"
                    class="p-mr-2"
                    width="20"
                  />
                  <span>${theme.name}</span>
                </div>
              `,
              escape: false,
              command: () => this.changeTheme(theme.filename)
            }
          );
        });
        menuItems.push(menuItem);
      });
    return menuItems;
  }

  changeTheme(filename: ThemeFilename) {
    this.themesService.changeTheme(filename);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Темы',
        icon: 'pi pi-fw pi-palette',
        items: this.themesItems
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}