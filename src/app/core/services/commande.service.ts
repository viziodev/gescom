import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { CommandeListe } from "../models/commande.model";

export interface CommandeService {
    findAllByClient(idClient:number,pageNumber:number):Observable<RestResponse<CommandeListe>>
}
