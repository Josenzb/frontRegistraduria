import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Login',
    icon: 'shopping-cart-outline',
    link: '/pages/seguridad/login',
    home: true,
  },
  {
    title: 'Candidatos',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Crear',
        link: '/pages/candidatos/crear',
      },
      {
        title: 'Listar',
        link: '/pages/candidatos/listar',
      }
    ],
  },
  {
    title: 'Partidos',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'CrearPartido',
        link: '/pages/partidos/crear',
      },
      {
        title: 'ListarPartidos',
        link: '/pages/partidos/listar',
      }
    ],
  },
  {
    title: 'Mesas',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'CrearMesa',
        link: '/pages/mesas/crear',
      },
      {
        title: 'ListarMesas',
        link: '/pages/mesas/listar',
      }
    ],
  }
];
