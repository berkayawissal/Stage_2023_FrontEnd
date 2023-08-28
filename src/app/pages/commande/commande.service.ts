import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';
import { CommandeModule } from './commande.module';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getAllCommandes(): Observable<CommandeModule[]> {
    return this.http.get<CommandeModule[]>(`http://localhost:8081/api/auth/commande/findAll`);
  }
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  getCommandeByEtat(etat: string): Observable<CommandeModule[]> {
    return this.http.get<CommandeModule[]>(`http://localhost:8081/api/auth/commande/findByEtat/${etat}`);
  }

  getDeliveredCommandIds(startDate: string, endDate: string, etat: string): Observable<CommandeModule[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate)
      .set('etat', etat);

    return this.http.get<CommandeModule[]>(`http://localhost:8081/api/auth/commande/findDelivredCommands`, { params });
  }
  getEtats(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8081/api/auth/commande/etats`); // Remplacez 'etats' par le vrai point de terminaison
  }
  updateCommande(id: number, updatedData: any): Observable<CommandeModule> {
    return this.http.put<CommandeModule>(`http://localhost:8081/api/auth/commande/update/{id}`, updatedData);
  }
  deleteCommande(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/auth/commande/delete/${id}`);
  }
}
