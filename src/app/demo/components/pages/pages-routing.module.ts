import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthorizationGuard} from "../../guards/authorization.guard";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule) },
        { path: 'database', loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule) },
        { path: 'fileUploader', loadChildren: () => import('./fileUploader/fileUploader.module').then(m => m.fileUploaderModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

// ,canActivate : [AuthorizationGuard]
