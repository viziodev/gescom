import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ClientCreateRequest, ClientListe } from "../models/client";

export interface ClientService {
    findAll(pageNumber:number):Observable<RestResponse<ClientListe[]>>
    create(clientRequest:ClientCreateRequest):Observable<RestResponse<ClientListe>>
}
