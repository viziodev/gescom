export interface ClientListe {
    id: number,
    nomComplet: string,
    telephone?:string,
    addresse: string
}

export interface ClientCreateRequest
{
    nom:string,
    prenom:string,
    telephone:string,
    quartier:string,
    ville:string,
    numVilla:string
  }