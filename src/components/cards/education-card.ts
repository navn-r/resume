import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Resume } from '../../types';
import { formatDate, parse } from '../../utils';
import { cardStyle, detailedTitleStyle, infoStyle } from './styles';

@customElement('education-card')
export class EducationCard extends LitElement {
  static styles = [cardStyle, detailedTitleStyle, infoStyle];

  @property({ type: Object })
  education!: Resume.IEducation;

  render() {
    return html`
      <div class="card">
        <div class="title-container">
          <a href="${this.education.url}">${this.education.institution}</a>
          <h4>${this.education.studyType}, ${this.education.area}</h4>
          <h4>${this.education.location}</h4>
          <h4>
            ${formatDate(this.education.startDate)} —
            ${formatDate(this.education.endDate)}
          </h4>
        </div>
        <div class="body">
          <p>
            <strong>Cumulative GPA:</strong> ${this.education.score} —
            ${this.education.awards.join(', ')}
          </p>
          <p>
            <strong>Teaching Assistant:</strong> ${parse(
              this.education.courses.join(', ')
            )}
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
