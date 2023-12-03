import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatabaseComponent} from './database.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DatabaseComponent }
    ])],
    exports: [RouterModule]
})
export class DatabaseRoutingModule { }
