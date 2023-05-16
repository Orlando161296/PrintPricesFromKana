import { LitElement, html } from "lit";


export class ProductCardComponent extends LitElement {
  static properties = {
    product:{ type: Object}
  }
  constructor() {
    super();
    this.Producto = [];
  }


  render() {
    return html`
    <article class="round primary-container" style="margin-top: 20px; max-width: 400px; display: grid;  ">
  <div class="row">
    <img class="circle large" src="${this.product.images}">
    <div class="max">
      <h6>${this.product.name}</h6>
      <h1>Bs. ${this.product.price.toFixed(2)}</h1>
    </div>
  </div>
  <nav>
    <button class="round primary" @click=${this.printCard}>Imprimir precio</button>
  </nav>
</article>
    `;
  }

  printCard(){
    const Producto = this.product;
    console.log("PRODUCTO A IMPRIMIR", Producto);
    const Productos = this.Producto.concat(Producto)
    console.log("ESTOS",Productos);
    printJS({printable: Productos, properties: ['name','price'], type: 'json', gridHeaderStyle: 'border: none;', gridStyle: 'border: none; font-size: 45px;',})
  }
  

  createRenderRoot() {
    return this;
  }
}
customElements.define("product-card", ProductCardComponent);