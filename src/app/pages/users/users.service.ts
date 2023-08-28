import { Injectable } from '@angular/core';
import { UsersModule } from './users/users.module';
import { Observable } from 'rxjs/';
import { HttpClient , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getAllUsers(): Observable<UsersModule[]> {
    return this.http.get<UsersModule[]>(`http://localhost:8081/api/auth/user/allUsers`);
  }
  updateUser(id: number, updatedData: any): Observable<UsersModule> {
    return this.http.put<UsersModule>(`http://localhost:8081/api/auth/user/update/{id}`, updatedData);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/auth/user/delete/${id}`);
  }
  constructor(private http: HttpClient) { }
}
