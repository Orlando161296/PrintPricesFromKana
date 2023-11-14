import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

export class TopBarComponent extends LitElement {
  static styles = css`
    .topbar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background-color: #333;
      position: fixed; /* Fija el topbar en la parte superior */
      width: 100%; /* Asegura que el topbar se extienda a lo largo de toda la ventana */
      top: 0; /* Alinea el topbar con la parte superior de la ventana */
      z-index: 1;
    }

    searchbar-component {
      flex-grow: 1;
    }

    button {
      background-color: #3498db; /* Color de fondo del botón */
      color: #ffffff; /* Color del texto del botón */
      border: none; /* Remueve el borde por defecto */
      padding: 10px 20px; /* Espacio alrededor del texto */
      text-align: center; /* Alinea el texto al centro */
      text-decoration: none; /* Remueve el subrayado */
      display: inline-block;
      font-size: 18px; /* Tamaño del texto */
      margin: 10px 70px;
      cursor: pointer; /* Cambia el cursor cuando se pasa por encima del botón */
      border-radius: 4px;
    }

    button:hover {
      background-color: #45a049; /* Cambia el color de fondo cuando se pasa por encima del botón */
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="topbar">
        <searchbar-component></searchbar-component>
        <div class="buttons">
          <button @click="${this.goToProductChange}">
            Productos Cambiados
          </button>
          <button @click="${this.goToListProduct}">Lista de Productos</button>
        </div>
      </div>
    `;
  }

  goToListProduct() {
    Router.go("/list");
  }
  goToProductChange() {
    Router.go("/listchanged");
  }
}
customElements.define("topbar-component", TopBarComponent);
