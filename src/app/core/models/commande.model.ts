import { ClientListe } from "./client"
import { ProduitPanier } from "./produit"

export interface CommandeListe {
        client:ClientListe
        commandes: CommandeItemListe[]
}

export interface CommandeItemListe
{
    id: number,
    dateCmd: string,
    numero: string,
    montant: number|null
}

export interface CommandeItemWithClient
{
    client:ClientListe
    id: number,
    dateCmd: string,
    numero: string,
    montant: number|null
}

export interface CommandeCreate {
  articlesPanier?: unknown[] | undefined;
  total?: number | null | undefined;
  client?: Partial<{
      id: any;
      nomComplet: null;
      telephone: string | null;
      addresse: any;
  }> | undefined;
}


