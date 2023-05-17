import { LitElement, html } from "lit";

export class ProductCardComponent extends LitElement {
  static properties = {
    product: { type: Object },
  };
  constructor() {
    super();
    this.Producto = [];
  }

  render() {
    return html`
      <article
        class="round primary-container"
        style="margin-top: 20px; max-width: 400px; display: grid; "
      >
        <div class="row">
          <img class="circle large" src="${this.product.images}" />
          <div class="max" id="${this.product.name}">
            <h6>${this.product.name}</h6>
            <h1>Bs. ${this.product.price.toFixed(2)}</h1>
          </div>
        </div>
        <nav>
          <button class="round primary" @click=${this.PrintPrice}>
            Imprimir precio
          </button>
        </nav>
      </article>
    `;
  }

  PrintPrice() {
    console.log("ESTE ES EL PRODUCTO A",this.product);
    printJS({ printable: `${this.product.name}`, type: "html" });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("product-card", ProductCardComponent);
