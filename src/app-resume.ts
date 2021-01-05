import './components/header';
import './components/experience-card';
import './components/icon';
import {css, customElement, html, LitElement} from 'lit-element';

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
      line-height: 1.25rem;
    }

    .title {
      display: grid;
      color: var(--text);
      grid-template-columns: 2.5rem auto;
      align-items: flex-end;
      border-bottom: 0.25rem var(--primary) solid;
      margin: 1.5rem 2rem 0 2rem;
      padding-bottom: 0.75rem;
    }

    .section {
      display: grid;
      grid-template-rows: auto;
      row-gap: 1rem;
    }

    .body {
      margin-top: 0.5rem;
      font-size: 1.1rem;
      padding-right: 2rem;
    }

    .space {
      margin-right: 0.25px;
    }

    #uni-awards {
      margin-top: 0.5rem;
    }

    ul {
      margin-top: 0;
      margin-left: -0.5rem;
    }

    #skills {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 0.75rem;
      color: var(--text);
      margin-left: 2rem;
      font-size: 1.1rem;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <div id="content">
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-graduation-cap"></fa-icon>
            <h2>EDUCATION</h2>
          </div>
          <experience-card
            name="University of Toronto"
            subtitle="Honours Bachelor of Science, Computer Science Co-op"
            location="Toronto, ON"
            time="Sept. 2019 — Apr. 2023 (Expected)"
          >
            <div slot="body" class="body">
              Cumulative GPA: <strong>3.78 / 4.00</strong> <br />
              Notable Courses: Software Design, Intro to Software Engineering,
              Discrete Mathematics, Multivariable Calculus, Linear Algebra<br />
              Awards:
              <ul id="uni-awards">
                <li>
                  <strong>Dean's List of Academic Excellence</strong> (2019-20)
                </li>
                <li><strong>University of Toronto Scholar</strong> ($7500)</li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-stream"></fa-icon>
            <h2>SKILLS</h2>
          </div>
          <div id="skills">
            <div class="category">
              <strong>Programming:</strong> HTML, CSS, TypeScript, JavaScript,
              Java, C, Python, Shell
            </div>
            <div class="category">
              <strong>Frameworks and Tools:</strong> Angular, React Native,
              Jira, Git, TravisCI, MongoDB, Firebase
            </div>
            <div class="category">
              <strong>Development Methodology:</strong> Agile with Scrum
              Framework
            </div>
          </div>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-briefcase"></fa-icon>
            <h2>EXPERIENCE</h2>
          </div>
          <experience-card
            name="Software Developer"
            subtitle="CaseWare International Inc. &bull; Co-op"
            location="Toronto, ON"
            time="Sept. 2020 — Apr. 2021"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  Engaged in an <strong>Agile Scrum</strong> of 11 members for
                  the <strong>Simple Engagements</strong> product
                </li>
                <li>
                  Facilitated <strong>Daily Standup</strong> meetings using
                  various Sprint, Regression, and On Call
                  <strong>Jira</strong> Boards
                </li>
                <li>
                  Decreased developer & QA regression efforts by <strong>60%</strong> by converting manual tests to unit tests with <strong>Karma</strong> and <strong>Jasmine</strong>
                </li>
                <li>
                  Developed bug <span class="space">f</span>ixes and features
                  using <strong>Angular, AngularJS</strong> and
                  <strong>TypeScript</strong> improving the end-user experience
                  for <strong>60+</strong> international distributors
                </li>
              </ul>
            </div>
          </experience-card>
        </div>
        <div class="section">
          <div class="title">
            <fa-icon class="fas fa-code"></fa-icon>
            <h2>PROJECTS</h2>
          </div>
          <experience-card
            name="UImpactify"
            subtitle="Online Learning Platform"
            isProject="true"
            repo="https://github.com/navn-r/uimpactify"
            location="uimpactify.herokuapp.com"
            time="Sept. 2020 — Dec. 2020"
            ><div slot="body" class="body">
              <ul>
                <li>
                  Developed in an Agile Scrum of 7 members over 4 sprints,
                  specializing in education for the social purpose
                  sector
                </li>
                <li>
                  Facilitated Scrum Daily Standup, Backlog Re<span class="space"
                    >f</span
                  >inement, and Software Architecture Design meetings
                </li>
                <li>
                  Developed and implemented a Discord Bot to supplement Daily
                  Standup Meetings, reducing overall meeting time by
                  <strong>50%</strong>
                </li>
                <li>
                  <strong>Core features:</strong> Courses, Graded Assessments, Student Analytics, 
                  Surveys & Ratings, Realtime Chat, Volunteer & Employment
                  Opportunities and a community-driven Donation System
                </li>
                <li>
                  <strong>Technology:</strong> MongoDB, ExpressJS, Angular,
                  Node.js, Socket.io, Chart.js, Multer, GridFS, Figma, Jira, Github
                </li>
              </ul>
            </div></experience-card
          >
          <experience-card
            name="Spotify API Clone"
            subtitle="Social-centric Music Player Backend"
            isProject="true"
            repo="https://github.com/navn-r/spotify-api-clone"
            location="navn.me/spotify-api-clone"
            time="Nov. 2020 — Dec. 2020"
            ><div slot="body" class="body">
              <ul>
                <li>
                  <strong>Core Features:</strong> Creating and following user
                  pro<span class="space">f</span>iles, Uploading and liking songs, Playlist
                  generation and Querying liked songs from followers
                </li>
                <li>
                  <strong>Technology:</strong> Java, Spring Boot, MongoDB, Neo4j
                </li>
              </ul>
            </div></experience-card
          >
          <experience-card
            name="Ritrovo"
            subtitle="Full-Stack Social Platform"
            isProject="true"
            repo="https://github.com/navn-r/ritrovo"
            location="ritrovo.herokuapp.com"
            time="Sept. 2020"
            ><div slot="body" class="body">
              <ul>
                <li>
                  <strong>Core features:</strong> Create, Edit, View, and Delete
                  posts made by other users in a single-community based
                  dashboard
                </li>
                <li>
                  <strong>Technology:</strong> MongoDB, ExpressJS, Angular,
                  Node.js, Markdown, Bootstrap, Heroku
                </li>
              </ul>
            </div></experience-card
          >
          <experience-card
            name="Noten"
            subtitle="Cloud Based Grade Management Application"
            isProject="true"
            repo="https://github.com/navn-r/Noten"
            location="ply.gl/com.noten"
            time="May 2020"
          >
            <div slot="body" class="body">
              <ul>
                <li>
                  <strong>Core features:</strong> Multi-Semester and Course
                  Management, Grade Prediction Calculator, Pass/Fail Courses,
                  Multiple Grade Scales <br />
                  and Incognito Grades
                </li>
                <li>
                  <strong>Technology:</strong> React Native, Firebase Realtime
                  Database, Google OAuth 2.0
                </li>
              </ul>
            </div>
          </experience-card>
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
