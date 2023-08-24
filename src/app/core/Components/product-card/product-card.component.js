import { LitElement, html } from "lit";
import './product-card.style.css';
export class ProductCardComponent extends LitElement {
  static properties = {
    product: { type: Object },
  };
  constructor() {
    super();
    this.Producto = [];
  }
 /** <article
        class="round primary-container"
        style="margin-top: 20px; max-width: 400px; display: grid; "
      >
        <div class="row">
          <img class="circle large" src="${this.product.images}" />
          <div class="max" id="${this.product.name}">
            <h6 id="nombre">${this.product.name}</h6>
            <h1 id="precio">Bs. ${this.product.price.toFixed(2)}</h1>
          </div>
        </div>
        <nav>
          <button class="round primary" @click=${this.PrintPrice}>
            Imprimir precio
          </button>
        </nav>
      </article>
  * 
  */
  render() {
    
    return html`
    <div
    class="card-content"
    style="margin-top: 20px; max-width: 400px; display: grid; "
    >
    <div class="row">
      <img class="card-image" src="${this.product.images}" />
      <div class="max" id="${this.product.name}">
        <h6 class="title" id="nombre">${this.product.name} ${this.product.presentation}</h6>
        <h1 class="description" id="precio">Bs. ${this.product.price.toFixed(2)}</h1>
      </div>
    </div>
    <nav>
      <button class="round primary" @click=${this.PrintPrice}>
        Imprimir precio
      </button>
    </nav>
  </div>
    `;
  }

  PrintPrice() {
    console.log("ESTE ES EL PRODUCTO A",this.product);
    printJS({ 
    printable: `${this.product.name}`, type: "html",
    style: `#nombre{
            font-size: 45px;
            text-align: center;
            margin-top: 0;
            }
            #precio{
            top: 0px;
            font-size: 80px;
            text-align: center;
            }`,},
    
    );
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("product-card", ProductCardComponent);
