import './components/header';
import './components/experience-card';
import './components/icon';
import * as data from './resume.json';
import {css, customElement, html, LitElement} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

@customElement('app-resume')
export class Resume extends LitElement {
  static styles = css`
    :host {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    @media screen {
      :host {
        display: grid;
        grid-template-areas:
          'header header header header'
          '. content content .';
        margin-bottom: 5rem;
      }

      @media (max-width: 900px) {
        :host {
          grid-template-areas: 'header' 'content';
        }
      }
    }

    #content {
      margin-top: 0.75rem;
      grid-area: content;
    }

    app-header {
      grid-area: header;
    }

    fa-icon {
      font-size: 1.5rem;
    }

    h2 {
      margin: 0;
    }

    li {
      margin: 0.25rem 0;
      line-height: 1.35rem;
    }

    .title {
      display: grid;
      color: var(--text);
      grid-template-columns: 2.5rem auto;
      align-items: flex-end;
      border-bottom: 0.25rem var(--primary) solid;
      margin: 1rem 2rem;
      padding-bottom: 0.5rem;
    }

    .section {
      display: grid;
      grid-template-rows: auto;
    }

    .body {
      margin-top: 0.5rem;
      font-size: 1.1rem;
      padding-right: 2rem;
    }

    .education {
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    .space {
      margin-right: 0.25px;
    }

    #uni-awards {
      margin-top: 0.5rem;
    }

    ul {
      margin-top: 0;
      margin-bottom: 1.125rem;
      margin-left: -0.5rem;
    }

    #skills {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 0.75rem;
      color: var(--text);
      margin-left: 2rem;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <app-header .about="${data.about}"></app-header>
      <div id="content">
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-graduation-cap"></fa-icon>
            <h2>EDUCATION</h2>
          </div>
          ${data.education.map(({school, degree, location, duration, cgpa, courses, awards}) => html`
          <experience-card name="${school}" subtitle="${degree}" location="${location}" time="${duration}">
            <div slot="body" class="body education">
              Cumulative GPA: <strong>${unsafeHTML(cgpa)}</strong> <br />
              Notable Courses: ${unsafeHTML(courses.join(', '))} <br />
              Awards: ${unsafeHTML(awards.join(', '))}
            </div>
          </experience-card>
          `)}
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-stream"></fa-icon>
            <h2>SKILLS</h2>
          </div>
          <div id="skills">
            ${data.skills.map(skill => html`<div class="category">${unsafeHTML(skill)}</div>`)}
          </div>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-briefcase"></fa-icon>
            <h2>EXPERIENCE</h2>
          </div>
          ${data.experience.map(({position, employer, location, duration, accomplishments}) => html`
          <experience-card name="${position}" subtitle="${employer}" location="${location}" time="${duration}">
            <div slot="body" class="body">
              <ul>${accomplishments.map(accomplishment => html`<li>${unsafeHTML(accomplishment)}</li>`)}</ul>
            </div>
          </experience-card>
          `)}
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-code"></fa-icon>
            <h2>PROJECTS</h2>
          </div>
          ${data.projects.map(({name, date, shortDesc, repoUrl, demoUrl, accomplishments, features, technology}) => html`
          <experience-card name="${name}" subtitle="${shortDesc}" location="${demoUrl}" time="${date}" repo="${repoUrl}" isProject="true">
            <div slot="body" class="body">
              <ul>
                ${accomplishments.map(accomplishment => html`<li>${unsafeHTML(accomplishment)}</li>`)}
                <li><strong>Core features:</strong> ${unsafeHTML(features.join(', '))}</li>
                <li><strong>Technology:</strong> ${unsafeHTML(technology.join(', '))}</li>
              </ul>
            </div>
          </experience-card>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-resume': Resume;
  }
}
