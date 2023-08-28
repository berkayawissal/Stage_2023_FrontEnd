import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UsersModule } from './users.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : UsersModule[]=[];
editingUser:UsersModule | null = null;


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      user => this.user = user,
      error => console.error('Erreur lors de la récupération des user :', error)
    );

  }
  loadUser() {
    this.usersService.getAllUsers().subscribe(user => {
      this.user = user;
    });
  }
  editUser(user: UsersModule) {
    this.editingUser = { ...user };
  }
  saveUser(id: number) {
    if (this.editingUser) {
      const id = this.editingUser.id;
      const updatedData = {
        fullname: this.editingUser.fullname,
        localisation: this.editingUser.email,
        numTel: this.editingUser.roles
      };
      this.usersService.updateUser(this.editingUser.id, this.editingUser).subscribe(
        updatedUser => {
      
        const index = this.user.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          this.user[index] = { ...updatedUser };
        }
        this.editingUser = null;
      });
    }}

    deleteUser(id: number) {
      this.usersService.deleteUser(id).subscribe(
        () => {
          this.user = this.user.filter(user => user.id !== id);
          console.log('User supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du User :', error);
        }
      );
    }
    selectedUser: UsersModule | null = null;
    showDetails(user: UsersModule) {
      this.selectedUser = user;
    }

}
