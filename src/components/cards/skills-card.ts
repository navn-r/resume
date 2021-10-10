import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Resume } from '../../types';
import { parse } from '../../utils';
import { infoStyle } from './styles';

@customElement('skills-card')
export class SkillsCard extends LitElement {
  static styles = [infoStyle];

  @property({ type: Array })
  skills!: Resume.ISkill[];

  render() {
    return html`
      <div class="body">
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
