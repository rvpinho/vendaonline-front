
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
import { produtos } from "app/models/Produtos";
import { ProdutosService } from "app/services/produtos.service";

@Component({
  selector: "app-produto-form.",
  templateUrl: "./produtos-form.component.html",
  styleUrls: ["./produtos-form.component.scss"],
})
export class ProdutoFormComponent implements OnInit {
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
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

  produto: produtos = undefined;

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      descricao: ["", Validators.required],
      valor_unitario: ["", Validators.required],
    });

    this.produto = new produtos();

    if (this._route.snapshot.params.id != null) {
      this.produtoService
        .getById(this._route.snapshot.params.id)
        .subscribe((data) => {
          this.produto.id = this._route.snapshot.params.id;
          this.produto.descricao = data.descricao;
          this.produto.valor_unitario = data.valor_unitario;

          this.loginForm.patchValue({
            descricao: this.produto.descricao,
            date: this.produto.valor_unitario,
          });
        });
    } 

    this.contentHeader = {
      headerTitle: "produtos",
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

    this.produto.createProduto(this.loginForm.controls);

    if (this.produto.id != undefined) {
      this.produtoService.update(this.produto).subscribe(() => {
        this._router.navigate(["/produto"]);
  
      });
    } else {
      this.produtoService.save(this.produto).subscribe(() => {
        this._router.navigate(["/produto"]);
      });
    }
  }
}
