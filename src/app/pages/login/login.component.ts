
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { UsersModule } from '../users/users/users.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : UsersModule = new UsersModule();
  constructor(private authService: AuthServiceService, private router: Router) {}
  errorMsg: string = ""
  path: string = "../assets/img/boxed-bg.jpg";
  data: any;
  onSubmitLogin() {
    localStorage.removeItem("accesstoken")
    this.authService.login(this.user).subscribe(
      response => {
        if (response) {
          this.authService.setUserToken(response)
          console.log(response);
         
          this.router.navigate(['/accueil']);
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      },
      error => {
        
        console.error('An error occurred:', error);
      }
    );
    
}

}


