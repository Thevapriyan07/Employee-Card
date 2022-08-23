import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { customerCard } from '../modules/cutomer-card';



@Injectable({
  providedIn: 'root'
})
export class CustomerCardService {
 private url = "EmployeeCard";
  constructor (private http: HttpClient) { }

  public getcustomers(): Observable<customerCard[]> {
    return this.http.get<customerCard[]>(`${environment.apiUrl}/${this.url}`);
  }


}
