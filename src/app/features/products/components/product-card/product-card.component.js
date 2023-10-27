import { LitElement, html, css } from "lit";
import "./product-card.style.css";
export class ProductCardComponent extends LitElement {
  
  static styles = css`
  .card-content {
    background: #ffff;
    border-radius: 2px;
    padding: 20px;
    height: auto;
    width: 250px;
    height: 320px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25 0.8 0.25, 1);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.favorite {
    position: absolute;
    top: 10px;
    right: 10px;
}

.title {
    text-align: center;
    font-weight: 500;
}

.description {
    color: black;
    font-weight: bold;
}

.card-image {
  min-height: 153px;
  max-height: 153px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
    width: 70%;
    max-height: 147px;
    object-fit:contain;
    transition: transform .2s;
}

.image:hover{
  transform:scale(1.3);
}


@media (min-width: 571px) {

    .card-description p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    
}

@media (max-width: 570px) {

    .card-content {
      display: grid;
      grid-template-columns: 100px 1fr 1fr 1fr;
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      width: 90vw;
      height: 160px;
    }

    .image {
      width: 100%;
      object-fit: cover;
    }

    .card-image {
      grid-area: 1 / 1 / 3 / 2;
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 120px;
      max-height: 120px;
    }

    .card-description {
      grid-area: 1 / 2 / 2 / 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      padding: 5px;
    }

    .title {
      text-align: center;
      font-weight: 500;
    }

    .card-button {
      grid-area: 2 / 2 / 3 / 5;
      width: 100%;
    }

    p {
      margin: 0;
    }

}
  `;

  static properties = {
    product: { type: Object },
  };
  constructor() {
    super();
    this.Producto = [];
  }

  render() {
    return html`
      <div
        class="card-content"
      >
        <div class="row">
          <img class="card-image" src="${this.product.images}" />
          <div class="max" id="producto">
            <h6 class="title" id="nombre">
              ${this.product.name} ${this.product.presentation}
            </h6>
            <h1 class="description" id="precio">
              Bs. ${this.product.price.toFixed(2)}
            </h1>
          </div>
        </div>
        <nav>
          <button class="round primary" @click=${this.PrintPrice}>
            Imprimir precio
          </button>
        </nav>
      </div>
      <div id="iframeContainer"></div>

    `;
  }

  PrintPrice() {
   const fecha = new Date();
   const docDefinition = {
    content: [
      { text: `Fecha: ${ fecha.toLocaleDateString() }` },
      { text: `${this.product.name} \n`, style: 'header', alignment: 'center' },
      { text: `Bs.${this.product.price.toFixed(2)}`, style: 'header', alignment: 'center' },
    ],
    pageOrientation: 'landscape',
    styles: {
      header: {
        fontSize: 48, // Tamaño de letra más grande
        bold: true,
      },
    }
    }; 
    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.print();
  }

}
customElements.define("product-card", ProductCardComponent);