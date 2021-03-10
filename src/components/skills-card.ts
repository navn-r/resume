import {css, customElement, html, LitElement, property} from 'lit-element';
import { Skill } from '../models';
import { listParagraphStyle } from './card.style';

@customElement('skills-card')
export class SkillsCard extends LitElement {
  static styles = [listParagraphStyle, css`
    .skills-card {
      display: grid;
      grid-template-rows: auto;
      row-gap: 0.5rem;
    }
  `];

  @property({type: Array})
  skills!: Skill[];

  render() {
    return html`
      <div class="skills-card">
        ${this.skills.map((skill) => html`
          <p><strong>${skill.name}:</strong> ${skill.keywords.join(", ")}</p>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'skills-card': SkillsCard;
  }
}