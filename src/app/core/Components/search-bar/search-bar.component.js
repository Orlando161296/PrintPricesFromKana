import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import {
  debounceTime,
  map,
  tap,
  Subject,
} from "rxjs";

import { productService } from "../../services/product.service";

export class SearchBarComponent extends LitElement {

  static styles = css`
  
  .search-bar-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  .search-bar-container input[type="text"] {
    flex-grow: 1;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .search-bar-container label {
    margin-right: 10px;
  }

  .search-bar-container i {
    cursor: pointer;
  }

  `;

  static properties = {};

  get input(){
    return this.renderRoot?.querySelector('.search')?? null;
  }

  constructor() {
    super();

    this.productSrv = productService;


    this.filter$ = new Subject('')
    .pipe(
      debounceTime(300),
      map(()=> this.input.value),
      tap( input=> this.verifyInput(input)),
      tap( input => this.productSrv.filterForName(input))
    )
    this.filter$.subscribe();
  }

  render() {
    return html`
    <div class="search-bar-container" style="max-width: 450px; left: 40px;">
    <input type="text" class="search" @keyup=${this.filterForKeyUp} placeholder="Buscar producto"/>
  </div>
    `;
  }

  verifyInput(input){
    if(input != "" ){
      this.showIconClear= true;
      this.requestUpdate();
    }
    if(input == ""){
      this.showIconClear= false;
      this.requestUpdate();
    }
    console.log("VERIFICANDO", input);
  }

  filterForKeyUp(){
    this.filter$.next('');
  }

  
}
customElements.define("searchbar-component", SearchBarComponent);
