import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Resume } from '../types';
import { parse } from '../utils';
import { listParagraphStyle } from './card.style';

@customElement('skills-card')
export class SkillsCard extends LitElement {
  static styles = [
    listParagraphStyle,
    css`
      .skills-card {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.5rem;
      }
    `,
  ];

  @property({ type: Array })
  skills!: Resume.ISkill[];

  render() {
    return html`
      <div class="skills-card">
        ${this.skills.map(
          (skill) => html`
            <p>
              <strong>${skill.name}:</strong> ${parse(
                skill.keywords.join(', ')
              )}
            </p>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'skills-card': SkillsCard;
  }
}
