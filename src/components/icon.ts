import {css, customElement, html, LitElement, property} from 'lit-element';
@customElement('fa-icon')
export class Icon extends LitElement {
  static styles = css`
    @import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
  `;

  @property({type: String})
  class="fas fa-coffee"

  render() {
    return html` <i class=${this.class}></i> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fa-icon': Icon;
  }
}
