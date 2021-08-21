import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import marked from 'marked';
import './components';
import * as data from './resume.json';
import { Resume } from './types';
import { parse } from './utils';

@customElement('app-resume')
export class App extends LitElement {
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

    .letter {
      margin: 0.5in 1in;
      font-size: 1.0625rem;
      line-height: 1.25;
    }

    .letter * {
      margin: revert;
      padding: revert;
      border: revert;
      font: revert;
      vertical-align: revert;
    }
  `;

  @state()
  private _showLetter = false;

  @state()
  private letter = '';

  @property({ attribute: false })
  data: Resume.ISchema;

  constructor() {
    super();

    this.data = data;
    this._showLetter = Boolean(
      new URLSearchParams(window.location.search).get('letter')
    );

    if (this._showLetter) {
      this._fetchLetter();
    }
  }

  private async _fetchLetter() {
    const letter = await fetch('letter.md').then((res) => res.text());
    this.letter = marked(letter, {
      smartLists: true,
      smartypants: true,
    });
  }

  private _renderLetter() {
    return html`<div class="letter">${parse(this.letter)}</div>`;
  }

  private _renderResume() {
    return html`
      <div class="section">
        <h1 class="title">Education</h1>
        ${this.data.education.map(
          (value) =>
            html`<education-card .education="${value}"></education-card>`
        )}
      </div>
      <div class="section">
        <h1 class="title">Skills</h1>
        <skills-card .skills="${this.data.skills}"></skills-card>
      </div>
      <div class="section">
        <h1 class="title">Experiences</h1>
        ${this.data.work.map(
          (value) => html`<work-card .work="${value}"></work-card>`
        )}
      </div>
      <div class="section">
        <h1 class="title">Projects</h1>
        ${this.data.projects.map(
          (value) => html`<project-card .project="${value}"></project-card>`
        )}
      </div>
    `;
  }

  render() {
    return html`
      <app-header
        .basics="${this.data.basics}"
        ?hidefooter="${this._showLetter}"
      ></app-header>
      ${this._showLetter ? this._renderLetter() : this._renderResume()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-resume': App;
  }
}
