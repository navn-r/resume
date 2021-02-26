import './icon';
import {css, customElement, html, LitElement, property} from 'lit-element';

export interface About {
  firstName: string;
  lastName: string;
  contact: {
    portfolio: string;
    email: string;
    linkedIn: string;
    github: string;
  }
}

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

    a {
      text-decoration: none;
      color: var(--accent);
      outline: none;
      border: 0;
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

  @property({attribute: false})
  time: Date = new Date(Date.now());

  @property({type: Object})
  about!: About;

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
        <div id="name">
          <h1>${this.about.firstName} <span id="lastName">${this.about.lastName}</span></h1>
        </div>
        <div id="contact-container">
          <div class="contact">
            <fa-icon class="fas fa-link"></fa-icon>
            <a href="https://${this.about.contact.portfolio}">${this.about.contact.portfolio}</a>
          </div>
          <div class="contact">
            <fa-icon class="fas fa-paper-plane"></fa-icon>
            <a href="mailto:${this.about.contact.email}"
              >${this.about.contact.email}</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-linkedin"></fa-icon>
            <a href="https://linkedin.com/in/${this.about.contact.linkedIn}"
              >${this.about.contact.linkedIn}</a
            >
          </div>
          <div class="contact">
            <fa-icon class="fab fa-github"></fa-icon>
            <a href="https://github.com/${this.about.contact.github}">${this.about.contact.github}</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <div style="display: flex; align-items: center;">
          <em>Updated: ${this.time.toDateString()}</em>
        </div>
        <div>
          <a href="./RavindaranNavinn_Resume.pdf" target="_blank">
            Download PDF <fa-icon class="fas fa-download"></fa-icon>
          </a>
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
