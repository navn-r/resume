import { css } from 'lit';

export const cardStyle = css`
  .card {
    margin-bottom: 1.375rem;
  }

  @media screen {
    a:hover {
      background: rgba(255, 255, 0, 0.2) !important;
      box-shadow: 0px 2px 10px rgba(255, 255, 0, 0.2) !important;
    }
  }
`;

export const titleCardStyle = css`
  .title-container {
    display: grid;
    justify-content: space-between;
    row-gap: 0.125rem;
    grid-template-areas:
      'title location'
      'subtitle time';
    margin-bottom: 0.5rem;
  }

  .title-container a:first-child {
    font-family: var(--title);
    font-size: 1.25rem;
    font-weight: 600;
    grid-area: title;
  }

  a {
    text-decoration: none;
    outline: none;
    border: 0;
    color: var(--text);
  }

  h4 {
    font-family: var(--main);
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1rem;
  }

  .title-container h4:first-child {
    grid-area: subtitle;
  }

  .title-container h4:nth-child(3) {
    grid-area: location;
    text-align: right;
    font-size: 1.25rem;
  }
`;

export const listParagraphStyle = css`
  p,
  ul {
    margin: 0;
    padding: 0;
    font-size: 1.0625rem;
  }

  ul {
    padding-left: 1.375rem;
    line-height: 1.25rem;
  }

  li:not(:first-child) {
    margin: 0.25rem 0;
  }

  li::marker {
    font-size: 0.825rem;
  }
`;
