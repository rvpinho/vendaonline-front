
import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { produtos } from "app/models/Produtos";
import { ProdutosService } from "app/services/produtos.service";


@Component({
  selector: "app-produto.",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"],
})
export class ProdutoComponent implements OnInit {
  constructor(
    private ProdutoService: ProdutosService,
    private cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  public contentHeader: object;

  popupVisivel = false;

  produtos: produtos[];

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: "produtos",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [],
      },
    };

    this.produtos = [];

    this.ProdutoService.getAll().subscribe((data) => {
      data.forEach((element) => {
        let produto = new produtos();
        console.log(element);
        produto.id = element["id"];
        produto.descricao = element["descricao"];
        produto.valor_unitario = element["valor_unitario"];
        this.produtos.push(produto);
        this.cdr.detectChanges();
      });
    });
  }

  deleteproduto(produtoId: string) {
    this.ProdutoService.deleteUser(produtoId).subscribe(() => {
      window.location.reload();
    });
  }
}
