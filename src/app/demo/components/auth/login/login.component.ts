import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/AuthService";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService]

})
export class LoginComponent {


    email!:string;
    password!: string;
    incorrect: boolean=false;

    constructor(public layoutService: LayoutService,private router:Router,private messageService : MessageService,
                private authService: AuthService) { }

    onLogin() {

        if(this.email!=null && this.password!=null) {
            this.incorrect = false;
            this.authService.login(this.email, this.password).subscribe(
                (data: any) => {
                    this.authService.loadProfile(data);
                    this.router.navigate(["/pages/dashboard"]);

                },
                (error: any) => {
                    // This function is called if there is an error.
                    this.incorrect = true;
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password incorrect', life: 3000 });
                    throw error;
                }
            )
        }
    }
}
