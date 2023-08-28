import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivreurModule } from '../livreurs/livreur/livreur.module';

@Injectable({
  providedIn: 'root'
})
export class PointDeVenteService {
  getAllPointDeVente(): Observable<LivreurModule[]> {
    return this.http.get<LivreurModule[]>(`http://localhost:8081/api/auth/pointDeVente/findAll`);
  }
  updatePointDeVente(id: number, updatedData: any): Observable<LivreurModule> {
    return this.http.put<LivreurModule>(`http://localhost:8081/api/auth/pointDeVente/update/{id}`, updatedData);
  }
  deletePointDeVente(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/auth/pointDeVente/delete/${id}`);
  }
  constructor(private http: HttpClient) { }
}
