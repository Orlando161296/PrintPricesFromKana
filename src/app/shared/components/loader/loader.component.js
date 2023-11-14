import { LitElement, html, css } from "lit";

export class LoaderComponent extends LitElement {
  static styles = css`
  .loader {
    width: 10rem;
    aspect-ratio: 1;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: #Ff4900;
    animation: l15 1s infinite linear;
  }
  .loader-container{
    height: calc(100vh - 428px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader::before,
  .loader::after {    
    content: "";
    grid-area: 1/1;
    margin: 3px;
    border: inherit;
    border-radius: 50%;
    animation: l15 2s infinite;
  }
  .loader::after {
    margin: 8px;
    animation-duration: 3s;
  }
  @keyframes l15{ 
    100%{transform: rotate(1turn)}
  }
 
  `;

  static properties = {};
  constructor() {
    super();
  }

  render() {
    return html`
    <div class="loader-container">
    <div class="loader"></div>
    
    </div>
    `;
  }
 
}
customElements.define("loader-component", LoaderComponent);
