import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {AuthService} from "../demo/service/AuthService";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,public authService:AuthService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'PAGES',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/pages/dashboard']
                    },
                    {
                        label: 'Datatable',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/database']
                    },
                    {
                        label: 'File uploader',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/fileUploader']
                    },

                ]
            }

        ];
    }
}
