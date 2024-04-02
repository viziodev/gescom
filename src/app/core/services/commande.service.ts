import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { CommandeCreate, CommandeItemWithClient, CommandeListe } from "../models/commande.model";

export interface CommandeService {
    findAllByClient(idClient:number,pageNumber:number):Observable<RestResponse<CommandeListe>>
    findAll(pageNumber:number):Observable<RestResponse<CommandeItemWithClient[]>>
    create(commandeRequest:CommandeCreate):Observable<RestResponse<void>>
}
