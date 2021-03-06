import {css, html, LitElement} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {Education} from '../models';
import {formatDate, parse} from '../utils';
import {cardStyle, listParagraphStyle, titleCardStyle} from './card.style';

@customElement('education-card')
export class EducationCard extends LitElement {
  static styles = [
    cardStyle,
    titleCardStyle,
    listParagraphStyle,
    css`
      .body {
        display: grid;
        grid-template-rows: auto;
        row-gap: 0.375rem;
      }

      .body p {
        margin: 0;
        padding: 0;
      }
    `,
  ];

  @property({type: Object})
  education!: Education;

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <a href="${this.education.url}">${this.education.institution}</a>
          <h4>${this.education.studyType}, ${this.education.area}</h4>
          <h4>${this.education.location}</h4>
          <h4>
            ${formatDate(this.education.startDate)} —
            ${formatDate(this.education.endDate)} (Expected)
          </h4>
        </div>
        <div class="body">
          <p><strong>Cumulative GPA:</strong> ${this.education.score}</p>
          <p>
            <strong>Notable Courses:</strong> ${parse(
              this.education.courses.join(', ')
            )}
          </p>
          <p>
            <strong>Awards:</strong>
            <em>${this.education.awards.join(', ')}</em>
          </p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'education-card': EducationCard;
  }
}
