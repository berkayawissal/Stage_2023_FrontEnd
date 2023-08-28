import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivreurModule } from '../livreurs/livreur/livreur.module';

@Injectable({
  providedIn: 'root'
})
export class EndUserService {
    getAllEndUser(): Observable<LivreurModule[]> {
      return this.http.get<LivreurModule[]>(`http://localhost:8081/api/auth/endUser/findAll`);
    }
    updateEndUser(id: number, updatedData: any): Observable<LivreurModule> {
      return this.http.put<LivreurModule>(`http://localhost:8081/api/auth/endUser/update/{id}`, updatedData);
    }
    deleteEndUser(id: number): Observable<any> {
      return this.http.delete(`http://localhost:8081/api/auth/endUser/delete/${id}`);
    }
    constructor(private http: HttpClient) { }
}

  