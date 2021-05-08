import '../components';
import {css, customElement, html, LitElement} from 'lit-element';
import {Resume as ResumeSchema} from '../models';
import * as data from '../resume.json';

// for type safety
const resume: ResumeSchema = data;

@customElement('cover-letter')
export class Letter extends LitElement {
  static styles = css`
    :host {
      font-family: var(--main);
    }
  `;

  render() {
    return html`
      <app-header .basics="${resume.basics}" hideFooter></app-header>
      <slot name="body"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cover-letter': Letter;
  }
}
