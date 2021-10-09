import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Resume } from '../types';
import { parse } from '../utils';
import { cardStyle, listParagraphStyle } from './card.style';

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

      .title-container > p > strong:first-of-type {
        font-size: 1.25rem;
        font-family: var(--title);
        font-weight: 600;
      }

      a {
        border: 0;
        outline: none;
        text-decoration: none;
        color: var(--gray);
      }

      a strong {
        font-weight: 500;
      }
    `,
  ];

  @property({ type: Object })
  project!: Resume.IProject;

  private _renderList(name: string, list?: string[]) {
    if (!list?.length) {
      return null;
    }

    return html`<li><strong>${name}:</strong> ${parse(list.join(', '))}</li>`;
  }

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <p><strong>${this.project.name}</strong></p>
          ${this.project.repo && this.project.url
            ? html`
                <p>
                  <a href="${this.project.url}"
                    >(<strong>${this.project.type}</strong>)</a
                  >
                  <a href="${this.project.repo}">(<strong>GitHub</strong>)</a>
                </p>
              `
            : null}
        </div>
        <ul>
          <li>${parse(this.project.description)}</li>
          ${this.project.highlights?.map((h) => html`<li>${parse(h)}</li>`)}
          ${this._renderList('Core Features', this.project.features)}
          ${this._renderList('Technology', this.project.technology)}
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
