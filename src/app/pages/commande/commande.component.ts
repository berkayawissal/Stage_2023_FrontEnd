import { Component, OnInit } from '@angular/core';
import { CommandeService } from './commande.service';
import { CommandeModule } from './commande.module';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes: CommandeModule[]= [];
  deliveredCommandIds: CommandeModule[] = [];
  selectedEtat: string='';
  startDate: string='';
  endDate: string='';
  etats: string[] = []; // Liste des états à afficher
  editingCommande:CommandeModule | null = null;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.loadEtats(); // Charger les états au chargement du composant
    this.loadAllData();
  }

  loadEtats() {
    this.commandeService.getEtats().subscribe(
      etats => {
        this.etats = etats;
        console.log('États récupérés :', etats);
      },
      error => console.error('Erreur lors de la récupération des états :', error)
    );
  }

  loadAllData() {
   this.commandeService.getAllCommandes().subscribe(
      commandes => {
        this.commandes = commandes;
        console.log('Commandes récupérées :', commandes);
      },
      error => console.error('Erreur lors de la récupération des commandes :', error)
    );

    
  }

  onFilterButtonClick() {
    this.commandeService.getDeliveredCommandIds(this.startDate, this.endDate, this.selectedEtat)
      .subscribe(
        ids => {
          this.deliveredCommandIds = ids;
          console.log('IDs des commandes livrées récupérées :', ids);
        },
        error => console.error('Erreur lors de la récupération des IDs des commandes livrées :', error)
      );
  }


  loadCommande() {
    this.commandeService.getAllCommandes().subscribe(commandes => {
      this.commandes = commandes;
    });
  }
  editCommande(commandes: CommandeModule) {
    this.editingCommande = { ...commandes };
  }
  saveCommande(id: number) {
    if (this.editingCommande) {
      const idCommande = this.editingCommande.idCommande;
      const updatedData = {
        //idCommande: this.editingCommande.idCommande,
        total: this.editingCommande.total,
        etat: this.editingCommande.etat,
        description: this.editingCommande.description,
        
      };
      this.commandeService.updateCommande(this.editingCommande.idCommande, this.editingCommande).subscribe(
        updatedCommande => {
      
        const index = this.commandes.findIndex(commandes => commandes.idCommande === updatedCommande.idCommande);
        if (index !== -1) {
          this.commandes[index] = { ...updatedCommande };
        }
        this.editingCommande = null;
      });
    }}

    deleteCommande(id: number) {
      this.commandeService.deleteCommande(id).subscribe(
        () => {
          this.commandes = this.commandes.filter(commandes => commandes.idCommande !== id);
          console.log('commandes supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du commandes :', error);
        }
      );
    }
    selectedCommande: CommandeModule | null = null;
    showDetails(commandes: CommandeModule) {
      this.selectedCommande = commandes;
    }

}
