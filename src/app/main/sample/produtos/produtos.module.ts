import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderComponent } from "app/layout/components/content-header/content-header.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { ProdutoComponent } from "./index/produtos.component";
import { ProdutoFormComponent } from "./form/produtos-form.component";



// routing
const routes = [
  {
    path: "produto",
    component: ProdutoComponent,
    data: { animation: "sample" },
  },
  {
    path: "produto/edit/:id",
    component: ProdutoFormComponent,
    data: { animation: "sample" },
  },
  {
    path: "produto/create",
    component: ProdutoFormComponent,
    data: { animation: "sample" },
  },
];

@NgModule({
  declarations: [ProdutoComponent, ProdutoFormComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  exports: [ProdutoComponent, ProdutoFormComponent],
})
export class produtoModule {}
