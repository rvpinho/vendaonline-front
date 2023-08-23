
import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { enderecos } from "app/models/Enderecos";
import { enderecosService } from "app/services/enderecos.service";


@Component({
  selector: "app-endereco.",
  templateUrl: "./enderecos.component.html",
  styleUrls: ["./enderecos.component.scss"],
})
export class EnderecoComponent implements OnInit {
  constructor(
    private enderecoService: enderecosService,
    private cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  public contentHeader: object;

  popupVisivel = false;

  enderecos: enderecos[];

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: "enderecos",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [],
      },
    };

    this.enderecos = [];

    this.enderecoService.getAll().subscribe((data) => {
      data.forEach((element) => {
        let endereco = new enderecos();
        endereco.id = element["id"];
        endereco.rua = element.rua;
        endereco.numero = element.numero;
        endereco.bairro = element.bairro;
        endereco.cidadeId = element.cidade_id;
        endereco.telefone = element.telefone;
        this.enderecos.push(endereco);
        this.cdr.detectChanges();
      });
    });
  }

  deleteendereco(enderecoId: string) {
    this.enderecoService.deleteUser(enderecoId).subscribe(() => {
      window.location.reload();
    });
  }
}
