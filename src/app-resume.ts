/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {css, customElement, html, LitElement} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-resume')
export class Resume extends LitElement {
  static styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    blockquote {
      background-color: gray;
      padding: 1rem;
      margin-left: 1rem;
      border-left: 1rem darkslategray solid;
      color: white;
    }

    @media print {
      :host {
        font-family: "Comic Sans MS";
      }
    }
  `;

  render() {
    return html`
      <h1>Navinn Ravindaran</h1>
      <blockquote>Hire me pls.</blockquote>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-resume': Resume;
  }
}
