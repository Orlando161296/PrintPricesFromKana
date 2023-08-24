import { LitElement, html } from "lit";
import { kanaService } from "../../services/kanaservice";
import { tap } from "rxjs";

export class PrintProductComponent extends LitElement {
  static properties = {
    product: { type: Object },
  };
  constructor() {
    super();
    this.ListProduct = [];
    this.testingProduct = [{
      name: "Galleta Marilu Vainilla",
      price: 18.9,
      images: [
        "https://mercapronto.com/wp-content/uploads/2020/08/MARILU-PUIG-216GR-VAINILLA.jpg",
      ],
    },
    {
      name: "Atun Peñero 250g",
      price: 32.95,
      images: ["https://tumarket.com/static/img/products/7591687002737.jpg"],
    },
    {
      name: "Harina P.A.N Amarilla 1Kg",
      price: 26.5,
      images: [
        "https://thecourierexpert.com/wp-content/uploads/2022/12/harina-pan.png",
      ],
    },
    {
      name: "Café Cordillera 250g",
      price: 63.5,
      images: [
        "https://compraenavi.com/web/image/product.template/1355/image",
      ],
    },
    {
      name: "Salsa tiquire Flores 280g",
      price: 27.5,
      images: [
        "https://www.supermercadoluxor.com/wp-content/uploads/2020/11/Ketchup-Tiquire-Flores-397G.jpg",
      ],
    },
    {
      name: "Salsa tiquire Flores 280g",
      price: 27.5,
      images: [
        "https://www.supermercadoluxor.com/wp-content/uploads/2020/11/Ketchup-Tiquire-Flores-397G.jpg",
      ],
    },
    {
      name: "Salsa tiquire Flores 280g",
      price: 27.5,
      images: [
        "https://www.supermercadoluxor.com/wp-content/uploads/2020/11/Ketchup-Tiquire-Flores-397G.jpg",
      ],
    },
    {
      name: "Salsa tiquire Flores 280g",
      price: 27.5,
      images: [
        "https://www.supermercadoluxor.com/wp-content/uploads/2020/11/Ketchup-Tiquire-Flores-397G.jpg",
      ],
    },];
    this.KanaSrv= kanaService;
    this.loader = false;
  }

  firstUpdated(){
    const result$ =this.KanaSrv.getListProduct$()
    .pipe(
      tap(response => this.ListProduct = response),
      tap(()=> this.loader = true),
      tap(() => this.requestUpdate()),

    )
    result$.subscribe();
  }

  render() {
    return html`
    <h1 class="center-align small">Lista de Productos</h1>
      <searchbar-component></searchbar-component>
    ${(this.loader)
      ? html`
        <div class="container">
        <div class="container-cards">
        ${this.ListProduct.map((product) => {
          return html` <product-card .product=${product}></product-card> `;
        })}
        </div>
         </div>
      `
      : html`<loader-component></loader-component>`
    }
     
    `;
  }

  
  createRenderRoot() {
    return this;
  }
}
customElements.define("print-product", PrintProductComponent);
