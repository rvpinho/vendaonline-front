import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { BasicService } from "./basic.service";
import { enderecos } from "app/models/Enderecos";

@Injectable({ providedIn: "root" })
export class enderecosService extends BasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, "enderecos", http);
  }

  getAll() {
    return this.getHttp().get<any[]>(`${environment.apiUrl}/enderecos`);
  }

  getById(id: string) {
    return this.getHttp().get<any>(`${environment.apiUrl}/enderecos/${id}`);
  }

  save(user: enderecos) {
    return this.getHttp().post<enderecos>(`${environment.apiUrl}/enderecos`, user);
  }

  update(enderecos: enderecos) {
    return this.getHttp().put<enderecos>(
      `${environment.apiUrl}/enderecos/${enderecos.id}`,
      enderecos
    );
  }

  deleteUser(enderecosId: string) {
    return this.getHttp().delete<enderecos>(
      `${environment.apiUrl}/enderecos/${enderecosId}`
    );
  }
}
