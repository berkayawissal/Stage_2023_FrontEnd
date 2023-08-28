import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { LivreurModule } from './livreur/livreur.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  getAllLivreurs(): Observable<LivreurModule[]> {
    return this.http.get<LivreurModule[]>(`http://localhost:8081/api/auth/livreur/findAll`);
  }
  // updateLivreurs(id: number, updatedData: any):Observable<LivreurModule[]>{
  //   return this.http.get<LivreurModule[]>(`http://localhost:8081/api/auth/livreur//update/{id}`);
  // }
  updateLivreurs(id: number, updatedData: any): Observable<LivreurModule> {
    return this.http.put<LivreurModule>(`http://localhost:8081/api/auth/livreur/update/{id}`, updatedData);
  }
  deleteLivreur(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/auth/livreur/delete/${id}`);
  }
  constructor(private http: HttpClient) { }
}
