import { SelectItemGroup } from 'primeng/api';

export const GROUPED_THEMES: SelectItemGroup[] = [
  {
    label: 'Bootstrap',
    items: [
      {
        label: 'Blue Light',
        value: 'bootstrap4-light-blue',
        icon: 'bootstrap4-light-blue.svg'
      },
      {
        label: 'Purple Light',
        value: 'bootstrap4-light-purple',
        icon: 'bootstrap4-light-purple.svg'
      },
      {
        label: 'Blue Dark',
        value: 'bootstrap4-dark-blue',
        icon: 'bootstrap4-dark-blue.svg'
      },
      {
        label: 'Purple Dark',
        value: 'bootstrap4-dark-purple',
        icon: 'bootstrap4-dark-purple.svg'
      }
    ]
  },
  {
    label: 'Material Design',
    items: [
      {
        label: 'Indigo Light',
        value: 'md-light-indigo',
        icon: 'md-light-indigo.svg'
      },
      {
        label: 'Deep Purple Light',
        value: 'md-light-deeppurple',
        icon: 'md-light-deeppurple.svg'
      },
      {
        label: 'Indigo Dark',
        value: 'md-dark-indigo',
        icon: 'md-dark-indigo.svg'
      },
      {
        label: 'Deep Purple Dark',
        value: 'md-dark-deeppurple',
        icon: 'md-dark-deeppurple.svg'
      }
    ]
  }
];
