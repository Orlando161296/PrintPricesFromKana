import { LitElement, html } from "lit";
import { Router } from "@vaadin/router";

export class SearchBarComponent extends LitElement {
  static properties = {};
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="field label suffix border extra" style="max-width: 500px; margin-top: 60px; left: 40px;">
        <input type="text" />
        <label>Buscar Productos</label>
        <i>search</i>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("searchbar-component", SearchBarComponent);
