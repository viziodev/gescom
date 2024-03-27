import { ClientListe } from "./client"

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

