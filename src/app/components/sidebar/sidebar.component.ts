import { Component, OnInit } from '@angular/core';
import {ElectronService} from 'ngx-electron';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/user-profile', title: 'Pacientes',  icon: 'person', class: '' },
    { path: '/fichas-medicas', title: 'Fichas Medicas',  icon: 'content_paste', class: '' },
    { path: '/solicitar-horas', title: 'Solicitar Hora',  icon: 'schedule', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
      if (this._electronService.isElectronApp) {
            this.menuItems = this.menuItems.splice(0,2);
      }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
