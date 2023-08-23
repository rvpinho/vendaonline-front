
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { CoreConfigService } from "@core/services/config.service";
import { ActivatedRoute, Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { ComprasService } from "app/services/compras.service";
import { compras } from "app/models/Compras";
import { UserService } from "app/services/user.service";
import { enderecosService } from "app/services/enderecos.service";
import { ProdutosService } from "app/services/produtos.service";

@Component({
  selector: "app-compra-form.",
  templateUrl: "./compras-form.component.html",
  styleUrls: ["./compras-form.component.scss"],
})
export class CompraFormComponent implements OnInit {
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private CompraService: ComprasService,
    private userService: UserService,
    private enderecoService: enderecosService,
    private produtoService: ProdutosService
  ) {}

  public contentHeader: object;
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = "";
  public passwordTextType: boolean;
  public confirmPasswordTextType: boolean;

  compra: compras = undefined;
  users: any = [];
  enderecos: any = [];
  produtos: any = [];

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      produto_qtd: [null]
    });

    this.compra = new compras();

    this.produtoService.getAll().subscribe((data:any)=>{
      this.produtos = data;
    })

    this.enderecoService.getAll().subscribe((data:any)=>{
      this.enderecos = data;
    })

    this.userService.getAll().subscribe((data:any)=>{
      this.users = data;
    })

    if (this._route.snapshot.params.id != null) {
      this.CompraService
        .getById(this._route.snapshot.params.id)
        .subscribe((data) => {
          this.compra.id = this._route.snapshot.params.id;
          this.compra.usuario_id = data.usuario_id;
          this.compra.endereco_id = data.endereco_id;
          this.compra.date = data.date;

          this.loginForm.patchValue({
            usuario_id: this.compra.usuario_id,
            endereco_id: this.compra.endereco_id,
            produto_qtd: this.compra.produto_qtd,
          });
        });
    } else {
    }

    this.contentHeader = {
      headerTitle: "compras",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [],
      },
    };

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams["returnUrl"] || "/";
  }

  onSubmit() {
    //this.loading = true;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.compra.createCompra(this.loginForm.controls);


    if (this.compra.id != undefined) {
      this.CompraService.update(this.compra).subscribe(() => {
        this._router.navigate(["/compra"]);
      });
    } else {
      this.CompraService.save(this.compra).subscribe(() => {
        this._router.navigate(["/compra"]);
      });
    }
  }

  onSelecaoUserChange(event: any) {
    this.compra.usuario_id = event.target.value;
  }

  onSelecaoEnderecoChange(event: any) {
    this.compra.endereco_id = event.target.value;
  }

  onSelecaoProdutoChange(event: any) {
    console.log(event.target.value);
    this.compra.produto_id = event.target.value;
  }
}
