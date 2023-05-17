import { LitElement, html } from "lit";
import { kanaService } from "../../services/kanaservice";
import { tap } from "rxjs";
import "./home.style.css";
export class Home extends LitElement {
  constructor() {
    super();
    this.productChanged = [];
    this.testingProduct = [
      {
        name: "Galleta Marilu Vainilla",
        price: 18.90,
        images: [
          "https://mercapronto.com/wp-content/uploads/2020/08/MARILU-PUIG-216GR-VAINILLA.jpg",
        ],
      },
      {
        name: "Atun Peñero 250g",
        price: 32.95,
        images: [
          "https://tumarket.com/static/img/products/7591687002737.jpg",
        ],
      },
      {
        name: "Harina P.A.N Amarilla 1Kg",
        price: 26.50,
        images: [
          "https://thecourierexpert.com/wp-content/uploads/2022/12/harina-pan.png",
        ],
      },
      {
        name: "Café Cordillera 250g",
        price: 63.50,
        images: [
          "https://compraenavi.com/web/image/product.template/1355/image",
        ],
      },
      {
        name: "Salsa tiquire Flores 280g",
        price: 27.50,
        images: [
          "https://www.supermercadoluxor.com/wp-content/uploads/2020/11/Ketchup-Tiquire-Flores-397G.jpg",
        ],
      }
    ];
    this.KanaSrv = kanaService;
  }

  firstUpdated() {
    const reuslt$ = this.KanaSrv.listProduct.pipe(
      tap((response) => (this.productChanged = response)),
      tap(() => this.requestUpdate()),
      tap(() => console.log("productos locales", this.productChanged))
    );
    reuslt$.subscribe();
  }

  render() {
    return html`
      <div class="container-cards">
        ${this.testingProduct.map((product) => {
          return html`
            <product-card id="printJS-form" .product=${product}></product-card>
          `;
        })}

        <button @click=${this.print} id="btn_print">Imprimir Todos</button>
      </div>
    `;
  }

  print() {
    printJS({
      printable: this.testingProduct,
      properties: ["name", "price"],
      type: "json",
      style: `
      *{
        font-size: 60px;
        text-align: center;
        border: none;
      }`,
      gridStyle: 'border: none;'
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("home-component", Home);
