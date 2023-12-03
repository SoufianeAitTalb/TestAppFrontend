import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FileUpload} from "primeng/fileupload";


@Component({
    templateUrl: './fileUploader.component.html',
    providers: [MessageService]
})
export class fileUploaderComponent implements OnInit {

    submitted:boolean=false;
    @ViewChild('fileUpload')
    fileUpload!: FileUpload;
    constructor(
      private messageService: MessageService) { }

    ngOnInit() {


    }

    onAdd() {

        this.submitted=true;

        this.fileUpload.upload();
        this.uploadedFiles=[];


    }

    uploadedFiles: any[] = [];


    onUpload(event: any) {

        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

    }
    protected readonly environment = environment;

}




