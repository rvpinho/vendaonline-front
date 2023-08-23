import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderComponent } from "app/layout/components/content-header/content-header.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { CompraComponent } from "./index/compra.component";
import { CompraFormComponent } from "./form/compras-form.component";



// routing
const routes = [
  {
    path: "compra",
    component: CompraComponent,
    data: { animation: "sample" },
  },
  {
    path: "compra/edit/:id",
    component: CompraFormComponent,
    data: { animation: "sample" },
  },
  {
    path: "compra/create",
    component: CompraFormComponent,
    data: { animation: "sample" },
  },
];

@NgModule({
  declarations: [CompraComponent, CompraFormComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  exports: [CompraComponent, CompraFormComponent],
})
export class comprasModule {}
