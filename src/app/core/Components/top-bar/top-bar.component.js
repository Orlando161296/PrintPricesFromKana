import { LitElement, html } from "lit";
import { Router } from "@vaadin/router";
import "../top-bar/topbar.style.css";
export class TopBarComponent extends LitElement {
  static properties = {};
  constructor() {
    super();
  }
  /**
 * <div class="container-topbar">
        <header class="primary-container">
          <nav class="right-align">
            <button class="small-round" @click=${this.goToProductChange}>
              <img class="responsive" src="https://img.icons8.com/?size=512&id=qcSe4FOFpSOt&format=png" />
              <span>Productos Cambiados</span>
            </button>
            <button class="small-round" @click=${this.goToPrintProduct}>
              <img class="responsive" src="https://img.icons8.com/?size=512&id=CUByzzUJpaet&format=png" />
              <span>Todos los Productos</span>
            </button>
          </nav>
        </header>
      </div>
 */
  render() {
    return html`
      <div class="navbar-menu-container">
        <button @click="${this.goToPrintProduct}">Todos los Productos</button>
        <button @click="${this.goToProductChange}">Productos Cambiados</button>
      </div>
    `;
  }
  goToProductChange() {
    Router.go("/home/");
  }

  goToPrintProduct() {
    Router.go("/print/");
    // console.log("hace algo");
  }

  closeProgram() {
    // console.log("CERRANDO PROGRAMA");
    window.close();
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("topbar-component", TopBarComponent);
