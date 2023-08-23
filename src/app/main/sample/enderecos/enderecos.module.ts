import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderComponent } from "app/layout/components/content-header/content-header.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { EnderecoComponent } from "./index/enderecos.component";
import { enderecoFormComponent } from "./form/enderecos-form.component";




// routing
const routes = [
  {
    path: "enderecos",
    component: EnderecoComponent,
    data: { animation: "sample" },
  },

  {
    path: "endereco/edit/:id",
    component: enderecoFormComponent,
    data: { animation: "sample" },
  },
  {
    path: "endereco/create",
    component: enderecoFormComponent,
    data: { animation: "sample" },
  },
];

@NgModule({
  declarations: [EnderecoComponent, enderecoFormComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  exports: [EnderecoComponent, EnderecoComponent],
})
export class enderecoModule {}
