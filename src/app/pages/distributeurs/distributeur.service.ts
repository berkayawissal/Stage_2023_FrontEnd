import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivreurModule } from '../livreurs/livreur/livreur.module';

@Injectable({
  providedIn: 'root'
})
export class DistributeurService {
  getAllDistributeurs(): Observable<LivreurModule[]> {
    return this.http.get<LivreurModule[]>(`http://localhost:8081/api/auth/distributeur/findAll`);
  }
  updateDistributeur(id: number, updatedData: any): Observable<LivreurModule> {
    return this.http.put<LivreurModule>(`http://localhost:8081/api/auth/distributeur/update/{id}`, updatedData);
  }
  deleteDistributeur(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/auth/distributeur/delete/${id}`);
  }
  constructor(private http: HttpClient) { }
}
