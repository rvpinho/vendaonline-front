import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { BasicService } from "./basic.service";

@Injectable({ providedIn: "root" })
export class CidadeService extends BasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, "cidades", http);
  }

  getAll() {
    return this.getHttp().get<any[]>(`${environment.apiUrl}/cidades`);
  }

  getById(id: string) {
    return this.getHttp().get<any>(`${environment.apiUrl}/cidades/${id}`);
  }

  save(user: any) {
    console.log(user);
    return this.getHttp().post<any>(`${environment.apiUrl}/cidades`, user);
  }

  update(produto: any) {
    return this.getHttp().put<any>(
      `${environment.apiUrl}/cidades/${produto.id}`,
      produto
    );
  }

  deleteUser(produtoId: string) {
    return this.getHttp().delete<any>(
      `${environment.apiUrl}/cidades/${produtoId}`
    );
  }
}
