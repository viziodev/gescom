import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ClientListe } from "../models/client.liste";

export interface ClientService {
    findAll():Observable<RestResponse<ClientListe[]>>
}
