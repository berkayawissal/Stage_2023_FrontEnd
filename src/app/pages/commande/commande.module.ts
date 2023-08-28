import { LivreurModule } from "../livreurs/livreur/livreur.module";

export interface CommandeModule {
  idCommande: number;
  total: number;
  etat: string;
  createdDate: Date;
  dateLivree: Date;
  dateRamassee: Date;
  tempsLivree: Date;
  description: string;
  livreurs: any[];
  produits: any[]; 
  endUser: any; 
}
