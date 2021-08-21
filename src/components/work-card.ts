import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Resume } from '../types';
import { formatDate, parse } from '../utils';
import { titleCardStyle, listParagraphStyle, cardStyle } from './card.style';

@customElement('work-card')
export class WorkCard extends LitElement {
  static styles = [cardStyle, titleCardStyle, listParagraphStyle];

  @property({ type: Object })
  work!: Resume.IWork;

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <a href="${this.work.url}">${this.work.name}</a>
          <h4>${this.work.position}</h4>
          <h4>${this.work.location}</h4>
          <h4>
            ${formatDate(this.work.startDate)} —
            ${formatDate(this.work.endDate)}
          </h4>
        </div>
        <ul class="body">
          ${this.work.highlights.map((h) => html`<li>${parse(h)}</li>`)}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'work-card': WorkCard;
  }
}
