import { Component, OnInit } from '@angular/core';
import { LivreurModule } from '../../livreurs/livreur/livreur.module';
import { EndUserService } from '../end-user.service';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.css']
})
export class EndUserComponent implements OnInit {

  endUser: LivreurModule[]=[];
  editingEndUser:LivreurModule | null = null;

  constructor(private service : EndUserService) { }
  
  ngOnInit(): void {
    this.service.getAllEndUser().subscribe(
      endUser => this.endUser = endUser,
      error => console.error('Erreur lors de la récupération des endUsers :', error)
    );
    }
 loadEndUser() {
    this.service.getAllEndUser().subscribe(endUser => {
      this.endUser = endUser;
    });
  }
  editEndUser(endUser: LivreurModule) {
    this.editingEndUser = { ...endUser };
  }
  saveEndUser(id: number) {
    if (this.editingEndUser) {
      const id = this.editingEndUser.id;
      const updatedData = {
        fullname: this.editingEndUser.fullname,
        address: this.editingEndUser.address,
        localisation: this.editingEndUser.localisation,
        numTel: this.editingEndUser.numTel
      };
      this.service.updateEndUser(this.editingEndUser.id, this.editingEndUser).subscribe(
        updatedEndUser => {
      
        const index = this.endUser.findIndex(endUser => endUser.id === updatedEndUser.id);
        if (index !== -1) {
          this.endUser[index] = { ...updatedEndUser };
        }
        this.editingEndUser = null;
      });
    }}

    deleteEndUser(id: number) {
      this.service.deleteEndUser(id).subscribe(
        () => {
          this.endUser = this.endUser.filter(endUser => endUser.id !== id);
          console.log('endUser supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du endUser :', error);
        }
      );
    }
    selectedEndUser: LivreurModule | null = null;
    showDetails(endUser: LivreurModule) {
      this.selectedEndUser = endUser;
    }

}
