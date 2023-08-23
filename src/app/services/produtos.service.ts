import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { BasicService } from "./basic.service";
import { produtos } from "app/models/Produtos";

@Injectable({ providedIn: "root" })
export class ProdutosService extends BasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl, "produto", http);
  }

  getAll() {
    return this.getHttp().get<produtos[]>(`${environment.apiUrl}/produtos`);
  }

  getById(id: string) {
    return this.getHttp().get<produtos>(`${environment.apiUrl}/produtos/${id}`);
  }

  save(user: produtos) {
    console.log(user);
    return this.getHttp().post<produtos>(`${environment.apiUrl}/produtos`, user);
  }

  update(produto: produtos) {
    return this.getHttp().put<produtos>(
      `${environment.apiUrl}/produtos/${produto.id}`,
      produto
    );
  }

  deleteUser(produtoId: string) {
    return this.getHttp().delete<produtos>(
      `${environment.apiUrl}/produtos/${produtoId}`
    );
  }
}
