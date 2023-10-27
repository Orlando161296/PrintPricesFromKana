import { LitElement, html, css } from "lit";
import { kanaService } from "../../../../core/services/kanaservice";
import { tap } from "rxjs";

export class PrintProductComponent extends LitElement {

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
  };
  constructor() {
    super();
    this.ListProduct = [];
    this.KanaSrv= kanaService;
    this.loader = false;
  }

  firstUpdated(){
    const result$ =this.KanaSrv.getListProduct$()
    .pipe(
      tap(response => this.ListProduct = response),
      tap(()=> this.loader = true),
      tap(() => this.requestUpdate()),

    )
    result$.subscribe();
  }

  render() {
    return html`
      <searchbar-component></searchbar-component>
    ${(this.loader)
      ? html`
        <div class="container">
        <div class="container-cards">
        ${this.ListProduct.map((product) => {
          return html` <product-card .product=${product}></product-card> `;
        })}
        </div>
         </div>
      `
      : html`<loader-component></loader-component>`
    }
     
    `;
  }

  
  // createRenderRoot() {
  //   return this;
  // }
}
customElements.define("product-changed-page", PrintProductComponent);
