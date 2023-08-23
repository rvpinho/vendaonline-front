import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "users",
    title: "Users",
    translate: "Users",
    type: "item",
    icon: "users",
    url: "user",
  },

  {
    id: "products",
    title: "Produtos",
    translate: "Produtos",
    type: "item",
    icon: "shopping-bag",
    url: "produto",
  },

  {
    id: "address",
    title: "Endereços",
    translate: "Endereços",
    type: "item",
    icon: "map-pin",
    url: "enderecos",
  },

  {
  id: "shopping",
  title: "Compras",
  translate: "Compras",
  type: "item",
  icon: "shopping-cart",
  url: "compra",
},
];
