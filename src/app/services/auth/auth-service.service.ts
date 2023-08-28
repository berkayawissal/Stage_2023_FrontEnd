import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModule } from 'src/app/models/role/role.module';
import { map } from 'rxjs/operators';
import { UsersModule } from 'src/app/pages/users/users/users.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) {}

  login(user : UsersModule) : Observable<UsersModule>{
    
    return this.http.post<UsersModule>(`http://localhost:8081/api/login`, user);
  }
  register(email: string, fullname: string, password: string, roles: string[]): Observable<any> {
    const formData = { email, fullname, password, roles };
    return this.http.post<any>(`http://localhost:8081/api/register`, formData).pipe(
      map((response: { token: any; }) => {
        if (response && response.token) {
          // Extraire le token de la réponse et le stocker si nécessaire
          const token = response.token;
                 }
        return response; // Renvoyer la réponse originale
      })
    );
   
  }
  isUserAuthenticated(): boolean {
    if (localStorage.getItem("accesstoken")) {
      return true;
    }
    this.router.navigate(["/login"])
    return false;
  }
  setUserToken(authenticationResponse: UsersModule) {
    localStorage.setItem("accesstoken", JSON.stringify(authenticationResponse))
  }

  getAllRoles(): Observable<RoleModule[]> {
    return this.http.get<RoleModule[]>(`http://localhost:8081/role/allRoles`);
  }
   setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
