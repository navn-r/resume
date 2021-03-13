import './icon';
import {Basics} from '../models';
import {css, customElement, html, LitElement, property} from 'lit-element';
import {getIcon} from '../utils';

@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    #header {
      display: grid;
      background-color: var(--gray);
      color: var(--bg);
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 2.5rem;
    }

    fa-icon {
      font-size: 1.25rem;
      text-align: right;
    }

    #name {
      font-family: var(--title);
      font-size: 3.5rem;
      margin: auto 0;
      text-align: center;
      font-weight: 600;
    }

    #contact-container {
      display: grid;
      row-gap: 1rem;
    }

    #lower-row {
      display: grid;
      grid-template-columns: 2fr 3fr 2fr;
    }

    .contact {
      display: grid;
      grid-template-columns: 2rem auto;
      align-items: center;
      column-gap: 0.5rem;
    }

    #lower-row .contact {
      justify-content: center;
    }

    a {
      text-decoration: none;
      outline: none;
      border: 0;
      color: var(--off-white);
    }

    .contact a {
      color: var(--bg);
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: var(--dark-gray);
      color: var(--off-white);
      padding: 1rem 0;
      font-family: var(--main);
    }

    .footer fa-icon {
      font-size: 1rem;
    }

    @media print {
      .footer {
        display: none;
      }
    }
  `;

  @property({attribute: false})
  time: Date = new Date(Date.now());

  @property({type: Object})
  basics!: Basics;

  constructor() {
    super();
    this.getRecentCommit();
  }

  getRecentCommit(): void {
    fetch('https://api.github.com/repos/navn-r/resume')
      .then((res) => res.json())
      .then((repo) => {
        this.time = new Date(repo.pushed_at);
      });
  }

  render() {
    return html`
      <div id="header">
        <h1 id="name">${this.basics.name}</h1>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-map-marker-alt"></fa-icon>
            ${Object.values(this.basics.location).join(', ')}
          </div>
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
              ({network, url, username}) => html`
                <div class="contact">
                  <fa-icon class="${getIcon(network)}"></fa-icon>
                  <a href="${url}">${username}</a>
                </div>
              `
            )}
          </div>
        </div>
      </div>
      <div class="footer">
        <em>Last Updated: ${this.time.toDateString()}</em>
        <a href="./RavindaranNavinn_Resume.pdf" target="_blank">
          Download PDF <fa-icon class="fas fa-download"></fa-icon>
        </a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
