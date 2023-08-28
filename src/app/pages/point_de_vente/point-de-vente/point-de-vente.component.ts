import { Component, OnInit } from '@angular/core';
import { PointDeVenteService } from '../point-de-vente.service';
import { LivreurModule } from '../../livreurs/livreur/livreur.module';

@Component({
  selector: 'app-point-de-vente',
  templateUrl: './point-de-vente.component.html',
  styleUrls: ['./point-de-vente.component.css']
})
export class PointDeVenteComponent implements OnInit {

  pointDeVente: LivreurModule[]=[];
  editingPointDeVente:LivreurModule | null = null;

  constructor(private service : PointDeVenteService) { }

  ngOnInit(): void {
    this.service.getAllPointDeVente().subscribe(
      pointDeVente => this.pointDeVente = pointDeVente,
      error => console.error('Erreur lors de la récupération des PointDeVente :', error)
    );

    }
    loadPointDeVente() {
      this.service.getAllPointDeVente().subscribe(pointDeVente => {
        this.pointDeVente = pointDeVente;
      });
    }
    editPointDeVente(pointDeVente: LivreurModule) {
      this.editingPointDeVente = { ...pointDeVente };
    }
    savePointDeVente(id: number) {
      if (this.editingPointDeVente) {
        const id = this.editingPointDeVente.id;
        const updatedData = {
          fullname: this.editingPointDeVente.fullname,
          address: this.editingPointDeVente.address,
          localisation: this.editingPointDeVente.localisation,
          numTel: this.editingPointDeVente.numTel
        };
        this.service.updatePointDeVente(this.editingPointDeVente.id, this.editingPointDeVente).subscribe(
          updatedPointDeVente => {
        
          const index = this.pointDeVente.findIndex(pointDeVente => pointDeVente.id === updatedPointDeVente.id);
          if (index !== -1) {
            this.pointDeVente[index] = { ...updatedPointDeVente };
          }
          this.editingPointDeVente = null;
        });
      }}
  
      deletePointDeVente(id: number) {
        this.service.deletePointDeVente(id).subscribe(
          () => {
            this.pointDeVente = this.pointDeVente.filter(pointDeVente => pointDeVente.id !== id);
            console.log('PointDeVente supprimé avec succès');
          },
          error => {
            console.error('Erreur lors de la suppression du PointDeVente :', error);
          }
        );
      }
      selectedPointDeVente: LivreurModule | null = null;
      showDetails(pointDeVente: LivreurModule) {
        this.selectedPointDeVente = pointDeVente;
      }
//pointDeVente
}
