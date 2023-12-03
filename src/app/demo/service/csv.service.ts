import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CSV} from '../api/CSV';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CSVService {
    num=0;

    constructor(private http:HttpClient) {}




    public getCSV():Observable<CSV[]>{
      return this.http.get<CSV[]>(environment.backendHost+"/api/csv/");
   }


    addCSV(csv:CSV){
        this.http.post(environment.backendHost+"/api/csv/add-csv",csv).subscribe();
    }
    updateCSV(csv:CSV){

        this.http.put( environment.backendHost+"/api/csv/update-csv/"+csv.id,{...csv}).subscribe();

    }
    deleteCSVById(id: bigint) {

       this.http.delete(environment.backendHost+"/api/csv/delete-csv/"+id).subscribe();
    }



    getCSVById(id: bigint):Observable<CSV> {

        return this.http.get<CSV>(environment.backendHost+"/api/csv/"+id);
    }



}
