import {css, html, LitElement} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {Project} from '../models';
import {parse} from '../utils';
import {cardStyle, listParagraphStyle} from './card.style';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = [
    cardStyle,
    listParagraphStyle,
    css`
      .title-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .title-container * {
        font-size: 1.125rem;
      }

      .title-container p:first-child > strong {
        font-size: 1.25rem;
        font-family: var(--title);
        font-weight: 600;
      }

      a {
        border: 0;
        outline: none;
        text-decoration: none;
        color: var(--text);
      }

      a strong {
        font-weight: 500;
      }
    `,
  ];

  @property({type: Object})
  project!: Project;

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <p>
            <strong>${this.project.name}</strong> —
            ${parse(this.project.description)}
          </p>
          ${this.project.repo && this.project.url
            ? html`
                <p>
                  <a href="${this.project.url}"
                    >(<strong>${this.project.type}</strong>)</a
                  >
                  <a href="${this.project.repo}">(<strong>GitHub</strong>)</a>
                </p>
              `
            : html``}
        </div>
        <ul>
          ${this.project.highlights.map((h) => html`<li>${parse(h)}</li>`)}
          ${this.project.features
            ? html`<li>
                <strong>Core Features:</strong> ${parse(
                  this.project.features.join(', ')
                )}
              </li>`
            : ''}
          <li>
            <strong>Technology:</strong> ${parse(
              this.project.technology.join(', ')
            )}
          </li>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'project-card': ProjectCard;
  }
}
