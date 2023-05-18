import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
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
    <topbar-component></topbar-component>
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
