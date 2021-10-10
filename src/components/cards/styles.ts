import { css } from 'lit';

export const cardStyle = css`
  .card {
    margin-bottom: 1.375rem;
  }

  @media screen {
    a:hover {
      background: rgba(255, 255, 0, 0.2) !important;
      box-shadow: 0 2px 10px rgba(255, 255, 0, 0.2) !important;
    }
  }
`;

export const infoStyle = css`
  p,
  ul {
    margin: 0;
    padding: 0;
    font-size: 1.0625rem;
  }

  ul {
    padding-left: 1.375rem;
    line-height: 1.3125rem;
  }

  li:not(:first-child) {
    margin: 0.25rem 0;
  }

  li::marker {
    font-size: 0.825rem;
  }

  .body {
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.5rem;
  }

  .body p {
    margin: 0;
    padding: 0;
  }

  .body strong {
    color: var(--gray);
  }
`;

export const simpleTitleStyle = css`
  .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .title-container * {
    font-size: 1.125rem;
  }

  .title-container > p > strong:first-of-type {
    font-size: 1.25rem;
    font-family: var(--title);
    font-weight: 600;
  }

  a {
    border: 0;
    outline: none;
    text-decoration: none;
    color: var(--gray);
  }

  a strong {
    font-weight: 500;
  }
`;

export const detailedTitleStyle = css`
  .title-container {
    display: grid;
    justify-content: space-between;
    row-gap: 0.25rem;
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
    color: var(--gray);
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
