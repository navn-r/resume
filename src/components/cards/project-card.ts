import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Resume } from '../../types';
import { parse } from '../../utils';
import { cardStyle, infoStyle, simpleTitleStyle } from './styles';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = [cardStyle, simpleTitleStyle, infoStyle];

  @property({ type: Object })
  project!: Resume.IProject;

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
