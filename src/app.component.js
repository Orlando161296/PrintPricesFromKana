import { Router } from "@vaadin/router";
import { LitElement, html } from "lit";
import { routes } from "../app.routes";

export class AppComponent extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    const outlet = this.renderRoot.querySelector("#outlet");
    const router = new Router(outlet);
    router.setRoutes(routes);
  }

  render() {
    return html`
      
      <header class="primary-container">
        <nav>
          <button class="large-elevate primary">
            <img src="https://apps.odoo.com/apps/icon_image?module_id=51006"/>
            <span>Precios Cambiados</span>
          </button>
          <button class="large-elevate primary">
            <img src="https://cdn-icons-png.flaticon.com/512/4993/4993414.png"/>
            <span>Todos los Precios</span>
          </button>
        </nav>
      </header>

      <div class="app-container">
        <div id="outlet"></div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("app-root", AppComponent);
