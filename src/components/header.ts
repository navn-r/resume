import './icon';
import {css, customElement, html, LitElement} from 'lit-element';
@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    #header {
      background-color: var(--primary);
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 2rem;
      text-align: center;
      color: #fff;
    }

    fa-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: var(--accent);
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 400;
      font-style: italic;
    }

    #lastName {
      font-weight: 600;
      color: var(--accent);
    }

    #contact-container {
      display: grid;
      grid-template-rows: auto;
      row-gap: 10px;
    }

    .contact {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .contact a {
        text-decoration: none;
        color: #fff;
    }
  `;

  render() {
    return html`
      <div id="header">
        <h1>Navinn <span id="lastName">Ravindaran</span></h1>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-link"></fa-icon>
            <a href="https://navn-r.github.io">navn.me</a>
          </div>
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:navinn.ravindaran@mail.utoronto.ca"
              >navinn.ravindaran@mail.utoronto.ca</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-linkedin"></fa-icon>
            <a href="https://linkedin.com/in/navinn-ravindaran"
              >navinn-ravindaran</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-github"></fa-icon>
            <a href="https://github.com/navn-r">navn-r</a>
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
