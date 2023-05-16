import { LitElement, html } from "lit";
import { kanaService } from "../../services/kanaservice";
import { tap } from "rxjs";
import "./home.style.css";
export class Home extends LitElement {
  constructor() {
    super();
    this.productChanged = [];
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
        ${this.productChanged.map((product) => {
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
      printable: this.productChanged,
      properties: ["name", ,"price"],
      type: "json",
      gridHeaderStyle: "border: none;",
      gridStyle: "border: none; font-size: 45px;",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("home-component", Home);
