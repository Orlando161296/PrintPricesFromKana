import { LitElement, html } from "lit";
import { Router } from "@vaadin/router";
import "./loader.style.css";

export class LoaderComponent extends LitElement {
  static properties = {};
  constructor() {
    super();
  }

  render() {
    return html`
    <div class="container">
    
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("loader-component", LoaderComponent);
