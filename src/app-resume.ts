import './components';
import {css, customElement, html, LitElement} from 'lit-element';
import {Resume as ResumeSchema} from './models';
import data from './resume.json';

// for type safety 
const resume: ResumeSchema = data;

@customElement('app-resume')
export class Resume extends LitElement {
  static styles = css`
    :host {
      font-family: var(--main);
    }

    .section {
      width: 95%;
      margin: 1.5rem auto;
    }

    .title {
      font-family: var(--title);
      font-size: 1.25rem;
      font-weight: 500;
      text-transform: uppercase;
      padding-bottom: 2px;
      border-bottom: 1.5px solid var(--text);
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <app-header .basics="${resume.basics}"></app-header>
      <div class="section">
        <h1 class="title">Education</h1>
        ${resume.education.map(
          (value) =>
            html`<education-card .education="${value}"></education-card>`
        )}
      </div>
      <div class="section">
        <h1 class="title">Skills</h1>
        <skills-card .skills="${resume.skills}"></skills-card>
      </div>
      <div class="section">
        <h1 class="title">Work Experience</h1>
        ${resume.work.map(
          (value) => html`<work-card .work="${value}"></work-card>`
        )}
      </div>
      <div class="section">
        <h1 class="title">Projects</h1>
        ${resume.projects.map(
          (value) => html`<project-card .project="${value}"></project-card>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-resume': Resume;
  }
}
