import { Component, OnInit } from '@angular/core';
import { LivreurService } from '../livreur.service';
import { LivreurModule } from './livreur.module';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  livreurs: LivreurModule[]=[];
  editingLivreur:LivreurModule | null = null;

  constructor(private service : LivreurService) { }

  ngOnInit(): void {
    this.service.getAllLivreurs().subscribe(
      livreurs => this.livreurs = livreurs,
      error => console.error('Erreur lors de la récupération des livreurs :', error)
    );
    }
    
  loadLivreurs() {
    this.service.getAllLivreurs().subscribe(livreurs => {
      this.livreurs = livreurs;
    });
  }
  editLivreur(livreur: LivreurModule) {
    this.editingLivreur = { ...livreur };
  }
  saveLivreur(id: number) {
    if (this.editingLivreur) {
      const id = this.editingLivreur.id;
      const updatedData = {
        fullname: this.editingLivreur.fullname,
        address: this.editingLivreur.address,
        localisation: this.editingLivreur.localisation,
        numTel: this.editingLivreur.numTel
      };
      this.service.updateLivreurs(this.editingLivreur.id, this.editingLivreur).subscribe(
        updatedLivreur => {
      
        const index = this.livreurs.findIndex(livreur => livreur.id === updatedLivreur.id);
        if (index !== -1) {
          this.livreurs[index] = { ...updatedLivreur };
        }
        this.editingLivreur = null;
      });
    }}

    deleteLivreur(id: number) {
      this.service.deleteLivreur(id).subscribe(
        () => {
          this.livreurs = this.livreurs.filter(livreur => livreur.id !== id);
          console.log('Livreur supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du livreur :', error);
        }
      );
    }
    selectedLivreur: LivreurModule | null = null;
    showDetails(livreur: LivreurModule) {
      this.selectedLivreur = livreur;
    }
}
