import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RoleModule } from 'src/app/models/role/role.module';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  email:string="";
  password: string = "";
  name: string="";
  selectedRoles: RoleModule[] = []; 
  roles: RoleModule[] = [];
  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit(): void {
    this.authService.getAllRoles().subscribe(roles => {
      this.roles = roles.map(role => ({ ...role, selected: false }));
    });
  }
  addRole() {
    const selectedRolesToAdd = this.roles.filter(role => role.selected);
    this.selectedRoles.push(...selectedRolesToAdd);
  
  }
  onSubmitRegister() {
    const selectedRoleNames = this.selectedRoles.map(role => role.name);
    
    this.authService.register(this.email,this.name, this.password,selectedRoleNames).subscribe({
      next: (response: any) => {
        if (response) {
          localStorage.setItem('accessToken',response.access_token);
          localStorage.setItem('refreshToken',response.refresh_token);
          sessionStorage.setItem('refreshToken',response.refresh_token);
          sessionStorage.setItem('accessToken',response.access_token);
          this.router.navigate(['/accueil']);
         
          console.log('Register successful'); 
          console.log('Login successful');
          
        } else {
          
          console.log('Register failed');
        }
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
      },
      complete: () => {
        // Traitement à la complétion
      }
    });
      
}
}
