import './icon';
import {css, customElement, html, LitElement, property} from 'lit-element';
@customElement('app-header')
export class Header extends LitElement {
  static styles = css`
    #header {
      background-color: var(--primary);
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 2rem;
      color: #fff;
    }

    fa-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: var(--accent);
    }

    #name h1 {
      font-size: 3.5rem;
      font-weight: 400;
      font-style: italic;
      text-align: center;
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

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      background-color: var(--text);
      color: var(--accent);
      padding: 1rem 0;
    }

    .footer fa-icon {
      font-size: 1rem;
    }

    #print {
      background-color: var(--accent);
      color: var(--primary);
      border: 0;
      padding: 0.25rem 1rem;
      font-weight: 600;
      font-style: italic;
    }

    #print fa-icon {
      color: var(--primary);
    }

    #print:hover {
      cursor: pointer;
    }

    @media print {
      .footer {
        display: none;
      }
    }

    @media screen and (max-width: 900px) {
      @media (max-width: 900px) {
        #header {
          grid-template-columns: auto;
          justify-content: center;
        }

        #contact-container {
          grid-template-columns: repeat(4, 1fr);
        }

        .contact {
          justify-content: center;
          padding: 0 1rem;
        }
      }

      @media (max-width: 600px) {
        #header {
          padding: 1rem;
        }

        #contact-container {
          grid-template-columns: repeat(2, 1fr);
        }

        .contact {
          justify-content: flex-start;
        }

        #name h1 {
          font-size: 2.5rem;
        }
      }

      @media (max-width: 375px) {
        #contact-container {
          grid-template-columns: auto;
          margin-bottom: 1.5rem;
        }
      }
    }
  `;

  downloadToPDF() {
    window.print();
  }

  @property({attribute: false})
  time: Date = new Date(Date.now());

  constructor() {
    super();
    this.getRecentCommit();
  }

  getRecentCommit(): void {
    fetch('https://api.github.com/repos/navn-r/resume')
      .then((res) => res.json())
      .then((repo) => {
        this.time = new Date(repo.updated_at);
      });
  }

  render() {
    return html`
      <div id="header">
        <div id="name">
          <h1>Navinn <span id="lastName">Ravindaran</span></h1>
        </div>
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
      <div class="footer">
        <div style="display: flex; align-items: center;">
          <em>Updated: ${this.time.toDateString()}</em>
        </div>
        <button id="print" @click="${this.downloadToPDF}">Print Resume</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
