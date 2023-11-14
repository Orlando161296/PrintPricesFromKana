import { LitElement, html, css } from "lit";
import { kanaService } from "../../../../core/services/kana.service";
import { tap } from "rxjs";
import { productService } from "../../../../core/services/product.service";

export class Home extends LitElement {

  static styles = css`
  .container-cards {
    margin-top: 150px;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;
    min-height: calc(100vh - 125px - 104px);
}

button {
  background-color: #3498db; /* Color de fondo del botón */
color: #ffffff; /* Color del texto del botón */
border: none; /* Remueve el borde por defecto */
padding: 10px 20px; /* Espacio alrededor del texto */
text-align: center; /* Alinea el texto al centro */
text-decoration: none; /* Remueve el subrayado */
display: inline-block;
font-size: 16px; /* Tamaño del texto */
margin: 4px 2px;
cursor: pointer; /* Cambia el cursor cuando se pasa por encima del botón */
border-radius: 4px;
}

button:hover {
  background-color: #45a049; /* Cambia el color de fondo cuando se pasa por encima del botón */
}

  `;

  constructor() {
    super();
    this.productSrv = productService;
    this.productChanged = [];
    this.KanaSrv = kanaService;
  }

  firstUpdated() {
    const reuslt$ = this.KanaSrv.getListOfChangedProduct$().pipe(
      tap(response => this.productChanged = response),
      tap(() => this.requestUpdate()),
    );
    reuslt$.subscribe();
  }

  render() {
    return html`
      <div class="container-home">
      <div class="container">
        <div class="container-cards">
        ${ this.productChanged.length > 0 
           ? this.productChanged.map((product) => {
            return html` <product-card .product=${product}></product-card> `;
          })
          : html`<h1>No hay productos con cambio de precio</h1>`
        }
        </div>
      </div>



      </div>
    `;
  }


  PrintPrice() {

    const content = this.productChanged.map(obj => {
      return [
        { text: obj.name, fontSize: 48, alignment: 'center', bold: true },
        { text: `Bs. ${obj.price.toFixed(2)}`,alignment: 'center', fontSize: 48 },
        { text: '\n' } // Esto añade un espacio en blanco después de cada producto
      ];
    });
    
    const docDefinition = {
      content: content.flat(),
      pageOrientation: 'landscape',
    };
  
     const pdfDoc = pdfMake.createPdf(docDefinition);
     pdfDoc.print();
   }

}
customElements.define("home-page", Home);
