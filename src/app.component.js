import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
import { routes } from "./app.routes";
import "./app.style.css";

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
        <div id="outlet"></div>
    `;
  }
    
  createRenderRoot() {
    return this;
  }
}

customElements.define("app-root", AppComponent);
