import { Menubar } from 'primereact/menubar';

const Header = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location.href = '/';
      },
    },
    {
      label: 'Reservations',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        window.location.href = '/reservations';
      },
    },
  ];

  return <Menubar model={items} />;
};

export default Header;
