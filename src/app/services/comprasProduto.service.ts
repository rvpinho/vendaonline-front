import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { BasicService } from "./basic.service";


@Injectable({ providedIn: "root" })
export class ComprasProdutoService extends BasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, "comprasProduto", http);
  }

  getAll() {
    return this.getHttp().get<any[]>(`${environment.apiUrl}/comprasProduto`);
  }

  getById(id: string) {
    return this.getHttp().get<any>(`${environment.apiUrl}/comprasProduto/${id}`);
  }

  save(user: any) {
    return this.getHttp().post<any>(`${environment.apiUrl}/comprasProduto`, user);
  }

  update(compra: any) {
    return this.getHttp().put<any>(
      `${environment.apiUrl}/comprasProduto/${compra.id}`,
      compra
    );
  }

  deleteUser(compraId: string) {
    return this.getHttp().delete<any>(
      `${environment.apiUrl}/comprasProduto/${compraId}`
    );
  }
}
