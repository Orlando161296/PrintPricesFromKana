import { LitElement, html } from "lit";

export class LayoutPage extends LitElement {
  constructor() {
    super();
  }


  render() {
    return html`
    <topbar-component></topbar-component>
    <div>
    <slot style="margin-top:10px"></slot>
    </div>
    `;
  }
    
 
}

customElements.define("layout-page", LayoutPage);
