import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('fa-icon')
export class Icon extends LitElement {
  @property({ type: String })
  class = 'fas fa-coffee';

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      /><i class=${this.class}></i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fa-icon': Icon;
  }
}
