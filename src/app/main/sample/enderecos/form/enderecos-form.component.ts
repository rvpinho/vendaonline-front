

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
import { enderecos } from "app/models/Enderecos";
import { enderecosService } from "app/services/enderecos.service";
import { CidadeService } from "app/services/cidades.service";
import { UserService } from "app/services/user.service";


@Component({
  selector: "app-endereco-form.",
  templateUrl: "./enderecos-form.component.html",
  styleUrls: ["./enderecos-form.component.scss"],
})
export class enderecoFormComponent implements OnInit {
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private enderecoService: enderecosService,
    private cidadeService: CidadeService,
    private userService: UserService
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

  endereco: enderecos = undefined;
  cidades: any = [];
  users: any = [];

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {

    this.cidadeService.getAll().subscribe((data:any)=>{
      this.cidades = data;
    })

    this.userService.getAll().subscribe((data:any)=>{
      this.users = data;
    })

    this.loginForm = this._formBuilder.group({
      rua: ["", Validators.required],
      numero: [null, Validators.required],
      bairro: ["", Validators.required],
      telefone: ["", Validators.required],

    });



    this.endereco = new enderecos();

    if (this._route.snapshot.params.id != null) {
      this.enderecoService
        .getById(this._route.snapshot.params.id)
        .subscribe((data) => {
          this.endereco.id = this._route.snapshot.params.id;
          this.endereco.rua = data.rua;
          this.endereco.numero = data.numero;
          this.endereco.bairro = data.bairro;
          this.endereco.cidadeId = data.cidade_id;
          this.endereco.usuario_id = data.usuario_id;
          this.endereco.telefone = data.telefone;
          this.loginForm.patchValue(
            {
              rua: this.endereco.rua,
              numero: this.endereco.numero,
              bairro: this.endereco.bairro,
              telefone: this.endereco.telefone,
          });
        });
    } else {
    }

    this.contentHeader = {
      headerTitle: "enderecos",
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
    if (this.loginForm.invalid) {
      return;
    }

    this.endereco.createEndereco(this.loginForm.controls);

    if (this.endereco.id != undefined) {
      this.enderecoService.update(this.endereco).subscribe(() => {
        this._router.navigate(["/enderecos"]);
      });
    } else {
      this.enderecoService.save(this.endereco).subscribe(() => {
        this._router.navigate(["/enderecos"]);
      });
    }
  }


  
  onSelecaoChange(event: any) {
    this.endereco.cidadeId = event.target.value;
  }

  onSelecaoUserChange(event: any) {
    this.endereco.usuario_id = event.target.value;
  }
}
