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
    .card {
      margin: 0 1.625rem;
      color: var(--text);
    }

    .title-container {
      display: grid;
      justify-content: space-between;
      row-gap: 0.25rem;
      grid-template-areas:
        'title location'
        'subtitle time';
    }

    .subtitle {
      margin: 0;
      grid-area: subtitle;
    }

    .title {
      grid-area: title;
      margin: 0;
      font-weight: 600;
      font-size: 1.45rem;
    }

    .time {
      grid-area: time;
      text-align: right;
    }

    .location {
      grid-area: location;
      text-align: right;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
      font-weight: 500;
      color: var(--text);
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <h3 class="title">${this.name}</h3>
          <h4 class="subtitle">${unsafeHTML(this.subtitle)}</h4>
          ${this.getInfo()}
          <span class="time">${this.time}</span>
        </div>
        <slot name="body"></slot>
      </div>
    `;
  }

  getLocationText() {
    return this.location.includes('play.google.com') ? 'Google Play' : 
    // temporary for api fix
    this.location.includes('api') ? 'Documentation' :
    'Website';
  }

  getRepoText() {
    return this.repo.includes('github.com') ? 'GitHub' : 'Repo';
  }

  getInfo() {
    return !!this.isProject
      ? html`<div class="location">
          (<a href="${this.location}">${this.getLocationText()}</a>)&nbsp;(<a
            href="${this.repo}"
            >${this.getRepoText()}</a
          >)
        </div>`
      : html`<span class="location">${this.location}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'experience-card': ExperienceCard;
  }
}
