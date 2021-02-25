import {css, customElement, html, LitElement, property} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

@customElement('experience-card')
export class ExperienceCard extends LitElement {
  @property({type: String})
  name = 'Experience';

  @property({type: String})
  subtitle = 'summary/degree/position';

  @property({type: String})
  location = '';

  @property({type: String})
  time = '';

  @property({type: String})
  isProject = '';

  @property({type: String})
  repo = '';

  static styles = css`
    #card {
      margin: 0 2rem;
      color: var(--text);
    }

    #title-container {
      display: grid;
      justify-content: space-between;
      row-gap: 0.25rem;
      grid-template-areas:
        'title location'
        'subtitle time';
    }

    #subtitle {
      margin: 0;
      grid-area: subtitle;
    }

    #title {
      grid-area: title;
      margin: 0;
      font-weight: 600;
      font-size: 1.45rem;
    }

    #time {
      grid-area: time;
      text-align: right;
    }
    
    #location {
      grid-area: location;
      text-align: right;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
      color: var(--text);
    }
  `;

  render() {
    return html`
      <div id="card">
        <div id="title-container">
          ${this.getTitle()}
          <h4 id="subtitle">${unsafeHTML(this.subtitle)}</h4>
          ${this.getInfo()}
          <span id="time">${this.time}</span>
        </div>
        <slot name="body"></slot>
      </div>
    `;
  }

  getInfo() {
    return !!this.isProject
      ? html`<a href="https://${this.location}" id="location">${this.location}</a>`
      : html`<span id="location">${this.location}</span>`;
  }

  getTitle() {
    return !!this.isProject && !!this.repo
      ? html`<a href="${this.repo}"><h3 id="title">${this.name}</h3></a>`
      : html`<h3 id="title">${this.name}</h3>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'experience-card': ExperienceCard;
  }
}
