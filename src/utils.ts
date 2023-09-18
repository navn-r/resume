/**
 * Formats date to nearest month.
 *
 * @param date input date string "yyyy-mm-dd"
 * @returns "mmm. yyyy"
 */
export const formatDate = (date: string): string =>
  new Date(date).toLocaleString('en-GB', { month: 'short', year: 'numeric' });

export const isPresent = (date: string): boolean => new Date(date) > new Date();
