import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fileUploaderRoutingModule } from './fileUploader-routing.module';
import { fileUploaderComponent } from './fileUploader.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AutoCompleteModule } from "primeng/autocomplete";
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DataViewModule} from "primeng/dataview";
import {MultiSelectModule} from "primeng/multiselect";
import {ImageModule} from "primeng/image";
import {InputMaskModule} from "primeng/inputmask";
import {TreeSelectModule} from "primeng/treeselect";


@NgModule({
    imports: [
        CommonModule,
        DataViewModule,
        fileUploaderRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        SelectButtonModule,
        AutoCompleteModule,
        HttpClientModule,
        TabViewModule,
        InputSwitchModule,
        DropdownModule,
        MultiSelectModule,
        ImageModule,
        FileUploadModule,
        InputMaskModule
    ],
    declarations: [fileUploaderComponent],
    providers:[]
})
export class fileUploaderModule { }
