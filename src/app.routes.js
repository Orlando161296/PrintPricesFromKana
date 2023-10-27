import { routes as routes_products } from './app/features/products/products.routes'


export const routes = [
  { path: "/", children: routes_products, component: "layout-page" },
  // { path: "/browse", component: "home-page" },
  // { path: "/print/", component: "print-product" },
  { path: ".*", redirect: "/" },
];
