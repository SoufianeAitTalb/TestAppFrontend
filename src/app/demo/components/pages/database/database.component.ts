import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import {CSVService} from "../../../service/csv.service";
import {CSV} from "../../../api/CSV";

@Component({
    templateUrl: './database.component.html'
    ,
    providers: [MessageService,CSVService]
})
export class DatabaseComponent implements OnInit{


    csvLine : CSV = {

    };
    csv : CSV[] =[];

    csvDialog: boolean = false;
    deleteCsvDialog: boolean = false;

    submitted: boolean = false;



    addOrEditValue!: boolean;

    constructor(private csvService: CSVService, private messageService: MessageService) {
    }

    ngOnInit() {
        this.csvService.getCSV().subscribe({next: (data: CSV[])=>{this.csv=data;}});
    }

    addOrEdit(){
        if(    this.addOrEditValue){
            this.confirmAddCSV();
        }
        else {
            this.confirmEditCSV();
        }
    }
    addCSV(){
        this.addOrEditValue=true;

        this.csvLine = {};
        this.submitted = false;
        this.csvDialog = true;

    }

    confirmAddCSV(){
        this.submitted=true;
        if (!this.csvLine.name || !this.csvLine.category || !this.csvLine.price || !this.csvLine.price){}
        else {
            this.csvLine={ ...this.csvLine};

            this.csvService.addCSV(this.csvLine);
            this.csvDialog=false;

            this.csv.push(this.csvLine);

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Line added successfully', life: 3000 });
        }
    }
    editCSV(csvLine: CSV) {
        this.addOrEditValue=false;
        this.csvLine = { ...csvLine };
        this.csvDialog = true;

    }
    confirmEditCSV(){
        this.submitted=true;
        if (!this.csvLine.name || !this.csvLine.category || !this.csvLine.price || !this.csvLine.price){}
        else {
            this.csvLine = {...this.csvLine};

            this.csvService.updateCSV(this.csvLine);
            this.csvDialog = false;
            const index = this.csv.findIndex(item => item.id === this.csvLine.id);


            this.csv[index] = this.csvLine;

            this.csv = [...this.csv];

            this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Line edited', life: 3000});
        }
    }
    deleteCSV(csv: CSV) {
        this.deleteCsvDialog = true;
        this.csvLine = { ...csv };
    }

    confirmDelete() {
        this.deleteCsvDialog = false;

        this.csvService.deleteCSVById(this.csvLine.id!);
        this.csv = this.csv.filter(val => val.id !== this.csvLine.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Line deleted', life: 3000 });
        this.csvLine = {};
    }

    hideDialog() {

        this.csvDialog = false;
        this.submitted = false;

    }



    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }













}


