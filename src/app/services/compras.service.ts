import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { BasicService } from "./basic.service";
import { compras } from "app/models/Compras";


@Injectable({ providedIn: "root" })
export class ComprasService extends BasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, "compra", http);
  }

  getAll() {
    return this.getHttp().get<any[]>(`${environment.apiUrl}/compras`);
  }

  getById(id: string) {
    return this.getHttp().get<any>(`${environment.apiUrl}/compras/${id}`);
  }

  save(user: compras) {
    return this.getHttp().post<compras>(`${environment.apiUrl}/compras`, user);
  }

  update(compra: compras) {
    return this.getHttp().put<compras>(
      `${environment.apiUrl}/compras/${compra.id}`,
      compra
    );
  }

  deleteUser(compraId: string) {
    return this.getHttp().delete<compras>(
      `${environment.apiUrl}/compras/${compraId}`
    );
  }
}
