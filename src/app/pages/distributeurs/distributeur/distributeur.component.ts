import { Component, OnInit } from '@angular/core';
import { LivreurModule } from '../../livreurs/livreur/livreur.module';
import { DistributeurService } from '../distributeur.service';

@Component({
  selector: 'app-distributeur',
  templateUrl: './distributeur.component.html',
  styleUrls: ['./distributeur.component.css']
})
export class DistributeurComponent implements OnInit {

  distributeur: LivreurModule[]=[];
  editingDistributeur:LivreurModule | null = null;
  constructor(private service : DistributeurService) { }

  ngOnInit(): void {
    this.service.getAllDistributeurs().subscribe(
      distributeur => this.distributeur = distributeur,
      error => console.error('Erreur lors de la récupération des Distributeurs :', error)
    );
    }
    loadDistributeur() {
      this.service.getAllDistributeurs().subscribe(distributeur => {
        this.distributeur = distributeur;
      });
    }
    editDistributeur(distributeur: LivreurModule) {
      this.editingDistributeur = { ...distributeur };
    }
    saveDistributeur(id: number) {
      if (this.editingDistributeur) {
        const id = this.editingDistributeur.id;
        const updatedData = {
          fullname: this.editingDistributeur.fullname,
          address: this.editingDistributeur.address,
          localisation: this.editingDistributeur.localisation,
          numTel: this.editingDistributeur.numTel
        };
        this.service.updateDistributeur(this.editingDistributeur.id, this.editingDistributeur).subscribe(
          updatedDistributeur => {
        
          const index = this.distributeur.findIndex(distributeur => distributeur.id === updatedDistributeur.id);
          if (index !== -1) {
            this.distributeur[index] = { ...updatedDistributeur };
          }
          this.editingDistributeur = null;
        });
      }}
  
      deleteDistributeur(id: number) {
        this.service.deleteDistributeur(id).subscribe(
          () => {
            this.distributeur = this.distributeur.filter(distributeur => distributeur.id !== id);
            console.log('Livreur supprimé avec succès');
          },
          error => {
            console.error('Erreur lors de la suppression du livreur :', error);
          }
        );
      }
      selectedDistributeur: LivreurModule | null = null;
      showDetails(distributeur: LivreurModule) {
        this.selectedDistributeur = distributeur;
      }
}
