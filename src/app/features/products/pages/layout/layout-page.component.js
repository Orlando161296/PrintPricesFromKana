import { LitElement, html } from "lit";

export class LayoutPage extends LitElement {
  constructor() {
    super();
  }


  render() {
    return html`
    <topbar-component></topbar-component>
    <div style="margin-top:120px">
    <slot ></slot>
    </div>
    `;
  }
    
 
}

customElements.define("layout-page", LayoutPage);
