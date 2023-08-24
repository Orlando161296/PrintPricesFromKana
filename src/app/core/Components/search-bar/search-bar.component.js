import { LitElement, html } from "lit";
import { Router } from "@vaadin/router";
import {
  debounceTime,
  map,
  tap,
  Subject,
} from "rxjs";

export class SearchBarComponent extends LitElement {
  static properties = {};

  get input(){
    return this.renderRoot?.querySelector('.search')?? null;
  }

  constructor() {
    super();

    this.filter$ = new Subject('')
    .pipe(
      debounceTime(300),
      map(()=> this.input.value),
      tap((input)=> console.log(input))
    )
    this.filter$.subscribe();
  }

  render() {
    return html`
      <div class="field label suffix border extra" style="max-width: 500px; margin-top: 60px; left: 40px;">
        <input type="text" 
        class="search"
        @keyup=${this.filterForKeyUp}/>
        <label>Buscar Productos</label>
        <i>search</i>
      </div>
    `;
  }

  filterForKeyUp(){
    this.filter$.next('');
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("searchbar-component", SearchBarComponent);
