import { LitElement, html } from "lit";

export class PrintProductComponent extends LitElement {
  static properties = {
    product: { type: Object },
  };
  constructor() {
    super();
    this.Producto = [];
  }

  render() {
    return html`
        <h1>Lista de productos Completa</h1>
      
    `;
  }

  
  createRenderRoot() {
    return this;
  }
}
customElements.define("print-product", PrintProductComponent);
