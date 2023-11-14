import { LitElement, html, css } from "lit";
import { kanaService } from "../../../../core/services/kana.service";
import { tap } from "rxjs";
import 'lit-pagination/lit-pagination.js';

import { productService } from "../../../../core/services/product.service";

export class ListProductComponent extends LitElement {

  static styles = css`
  .container-cards {
    margin-top: 70px;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;
    min-height: calc(100vh - 125px - 104px);
}
  `;

  static properties = {
    product: { type: Object },
    showFiltered: { type: Boolean }, // Añade esta línea para rastrear qué lista mostrar
    
  };
  constructor() {
    super();
    this.productSrv = productService;
    this.KanaSrv= kanaService;
    this.ListProduct = [];
    this.filteredProducts = []; // Asume que filteredProducts es una propiedad de tu clase
    this.loader = false;
    this.showFiltered = false; // Inicializa showFiltered en false
  }

  firstUpdated(){

    const filtered$ = this.productSrv.productFiltered
    .pipe(
      tap( resp => {
        console.log( "product filtered",resp);
        this.filteredProducts = resp; // Guarda los productos filtrados
        this.showFiltered = true; // Cambia a la lista filtrada
        this.requestUpdate(); // Solicita una actualización para que se muestren los cambios
      })
    )
    filtered$.subscribe();

    const result$ =this.KanaSrv.getListProduct$()
    .pipe(
      tap(response => {
        this.ListProduct = response;
        this.showFiltered = false; // Cambia a la lista normal
        this.loader = true;
        this.requestUpdate();
      }),
    )
    result$.subscribe();
  }

  render() {
    return html`
    ${(this.loader)
      ? html`
        <div class="container">
        <div class="container-cards">
        ${(this.showFiltered ? this.filteredProducts : this.ListProduct).map((product) => {
          return html` <product-card .product=${product}></product-card> `;
        })}
        </div>
         </div>
      `
      : html`<loader-component></loader-component>`
    }
     
    `;
  }

  

}
customElements.define("list-product-page", ListProductComponent);
