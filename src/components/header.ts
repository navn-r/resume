import './icon';
import { Resume } from '../types';
import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    #header {
      display: grid;
      color: var(--gray);
      background-color: var(--bg);
      display: grid;
      grid-template-columns: auto max-content;
      padding: 2.5rem 2.5rem 0.5rem;
    }

    fa-icon {
      font-size: 1.25rem;
      text-align: right;
    }

    #name {
      font-family: var(--title);
      font-size: 3.5rem;
      margin: auto 0;
      text-align: left;
      font-weight: 600;
    }

    #contact-container {
      display: grid;
      row-gap: 1rem;
      max-width: 20rem;
    }

    #lower-row {
      display: grid;
      grid-template-columns: 1fr 1.07fr 1fr;
    }

    .contact {
      display: grid;
      grid-template-columns: 2rem auto;
      column-gap: 0.5rem;
    }

    #lower-row .contact:nth-child(2) {
      justify-content: center;
    }

    a {
      text-decoration: none;
      outline: none;
      border: 0;
      color: black;
      font-weight: 400;
    }

    .contact a {
      color: var(--gray);
    }

    @media screen {
      #contact-container a:hover {
        background: rgba(255, 255, 0, 0.2) !important;
        box-shadow: 0 2px 10px rgba(255, 255, 0, 0.2) !important;
      }
    }
  `;

  @property({ type: Object })
  basics!: Resume.IBasics;

  constructor() {
    super();
  }

  private _getIcon(input: string): string {
    const ICONS: Record<string, string> = {
      GitHub: 'fab fa-github',
      LinkedIn: 'fab fa-linkedin',
    };

    return ICONS[input] ?? 'fas-fa-link';
  }

  render() {
    return html`
      <div id="header">
        <h1 id="name">${this.basics.name}</h1>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:${this.basics.email}">${this.basics.email}</a>
          </div>
          <div id="lower-row">
            <div class="contact">
              <fa-icon class="fas fa-link"></fa-icon>
              <a href="${this.basics.url}"
                >${this.basics.url.replace('https://', '')}</a
              >
            </div>
            ${this.basics.profiles.map(
              ({ network, url, username }) => html`
                <div class="contact">
                  <fa-icon class="${this._getIcon(network)}"></fa-icon>
                  <a href="${url}">${username}</a>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
