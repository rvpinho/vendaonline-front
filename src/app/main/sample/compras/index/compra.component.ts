
import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

import { compras } from "app/models/Compras";
import { ComprasService } from "app/services/compras.service";

@Component({
  selector: "app-compra.",
  templateUrl: "./compra.component.html",
  styleUrls: ["./compra.component.scss"],
})
export class CompraComponent implements OnInit {
  constructor(
    private compraService: ComprasService,
    private cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  public contentHeader: object;

  popupVisivel = false;

  compras: compras[];

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: "compras",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [],
      },
    };

    this.compras = [];

    this.compraService.getAll().subscribe((data) => {
      console.log(data);
      data.forEach((element) => {
        let compra = new compras();
        compra.id = element["id"];
        compra.usuario_id = element.usuario_id;
        compra.date = element.data;
        compra.endereco_id = element.endereco_id;
        compra.produto_qtd = element.produto_qtd;
        this.compras.push(compra);
        this.cdr.detectChanges();
      });
    });
  }

  deletecompra(compraId: string) {
    this.compraService.deleteUser(compraId).subscribe(() => {
      window.location.reload();
    });
  }
}
