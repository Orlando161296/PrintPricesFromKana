import { LitElement, html } from "lit";
import { Router } from "@vaadin/router";
import './loader.style.css'

export class LoaderComponent extends LitElement {
  static properties = {};
  constructor() {
    super();
  }

  render() {
    return html`
    <div class="center-align" style="margin-top: 300px;">
    <a class="loader large"></a>
    </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("loader-component", LoaderComponent);
