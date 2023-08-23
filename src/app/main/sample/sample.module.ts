import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { SampleComponent } from "./sample.component";
import { HomeComponent } from "./home.component";
import { UserModule } from "./users/user.module";
import { enderecoModule } from "./enderecos/enderecos.module";
import { produtoModule } from "./produtos/produtos.module";
import { comprasModule } from "./compras/compras.module";



const routes = [
  {
    path: "sample",
    component: SampleComponent,
    data: { animation: "sample" },
  },
  {
    path: "home",
    component: HomeComponent,
    data: { animation: "home" },
  },
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    UserModule,
    comprasModule,
    enderecoModule,
    produtoModule,

  ],
  exports: [SampleComponent, HomeComponent],
})
export class SampleModule {}
