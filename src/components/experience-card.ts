import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('experience-card')
export class ExperienceCard extends LitElement {
  @property({type: String})
  title = 'Experience';

  @property({type: String})
  subtitle = 'summary/degree/position';

  @property({type: String})
  location = '';

  @property({type: String})
  time = '';

  @property({type: String})
  isProject = "";

  static styles = css`
    #card {
      margin: 0 2rem;
      color: var(--text);
    }

    #title-container {
      display: grid;
      justify-content: space-between;
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
      font-style: italic;
    }
    #location {
      grid-area: location;
      font-style: italic;
      text-align: right;
      font-size: 1.25rem;
      text-decoration: none;
      color: var(--text);
    }
  `;

  render() {
    return html`
      <div id="card">
        <div id="title-container">
          <h3 id="title">${this.title}</h3>
          <h4 id="subtitle">${this.subtitle}</h4>
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
}

declare global {
  interface HTMLElementTagNameMap {
    'experience-card': ExperienceCard;
  }
}
