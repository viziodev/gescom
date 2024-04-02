import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ClientCreateRequest, ClientListe } from "../models/client";
import { ProduitPanier } from "../models/produit";

export interface ProduitService {
    findLibelle(produit:string):Observable<RestResponse<ProduitPanier>>
}
