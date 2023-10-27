import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

export class TopBarComponent extends LitElement {
  static styles = css`
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }  
`;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="topbar">
        <button @click="${this.goToListProduct}">Lista de Productos</button>
        <button @click="${this.goToProductChange}">Productos Cambiados</button>
      </div>
    `;
  }
  
  goToListProduct() {
    Router.go("/list");
  }
  goToProductChange() {
    Router.go("/listchanged");
  }


}
customElements.define("topbar-component", TopBarComponent);
