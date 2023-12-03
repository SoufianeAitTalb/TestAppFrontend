import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/AuthService";

@Component({
    selector: 'app-login',
    templateUrl: './SignUp.component.html',
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
export class SignUpComponent {

    firstName!: string;
    lastName!: string;
    email!:string;
    password!: string;
    incorrect: boolean=false;


    constructor(public layoutService: LayoutService,private router:Router,private messageService : MessageService,
                private authService: AuthService) { }

    onSignUp() {

        if(this.firstName && this.lastName!=null && this.email!=null && this.password!=null  ) {
            if(this.isEmailValid(this.email) ){
            this.incorrect = false;
            this.authService.signUp(this.firstName,this.lastName,this.email, this.password).subscribe(
                (data: any) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success!',
                        detail: 'Sign up successful!',
                        life: 3000
                    });
                    setTimeout(() => {
                        this.router.navigate(["/auth/login"]);
                    }, 3500);


                },
                (error: any) => {
                    // This function is called if there is an error.
                    this.incorrect = true;
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email already exists', life: 3000 });
                    throw error;
                }
            )
        }
            else{
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid email format', life: 3000 });
            }
        }
    }


    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


}
