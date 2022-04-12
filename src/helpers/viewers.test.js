import { convertViewers } from './viewers.js';

const LESS_THAN_MILLION = 'less than a million, but more than 1000';
const MORE_THAN_MILLION = 'more than a million';

describe('convertViewers', () => {

  it('should return viewers count if viewers < 999', () => {
    expect(convertViewers(998)).toEqual(998);
  });

  it('should return const LESS_THAN_MILLION if 999 < viewers < 999999', () => {
    expect(convertViewers(10010)).toEqual(LESS_THAN_MILLION);
  });

  it('should return const MORE_THAN_MILLION if viewers > 999999', () => {
    expect(convertViewers(10000199)).toEqual(MORE_THAN_MILLION);
  });
});