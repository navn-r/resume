import {unsafeHTML} from 'lit/directives/unsafe-html.js';

export const parse = (input: string) =>
  unsafeHTML(
    input
      .replace(/fi/g, '<span style="margin-right: 0.25px">f</span>i')
      .replace(/(\*\*|__)(.*?)\1/gim, '<strong>$2</strong>')
  );

export const formatDate = (
  date: string,
  format: Intl.DateTimeFormatOptions = {month: 'short', year: 'numeric'}
) => new Date(date).toLocaleString('default', format);
