import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowPopupSearch = false;
  isShowMenu = false;
  menu: any[] = [
    {
      point: 'Home',
      key: 'home',
      isOpen: false,
      submenu: [
        {
          link: 'Home',
        },
        {
          link: 'Home 2',
        },
        {
          link: 'Home 3',
        },
        {
          link: 'Home 4',
        }
      ]
    },
    {
      point: 'About',
    },
    {
      point: 'Pages',
      key: 'pages',
      isOpen: false,
      submenu: [
        {
          link: 'Portfolio',
        },
        {
          link: 'Team',
        },
        {
          link: 'Pricing plan',
        },
        {
          link: '404 page',
        }
      ]
    },
    {
      point: 'Service',
    },
    {
      point: 'Blog grid',
    },
    {
      point: 'Contact',
    },
  ];

  openLink(e: any, key: any) {
    e.preventDefault();
    if (window.innerWidth <= 960) {
      key.isOpen = !key.isOpen;
    }
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  showSearch() {
    this.isShowPopupSearch = !this.isShowPopupSearch;
  }
}
