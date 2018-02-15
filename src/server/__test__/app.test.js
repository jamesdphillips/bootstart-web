// @flow

// flowlint untyped-import: off
import {fetch} from 'midori/test';
// flowlint untyped-import: error
import app from '/server/app';

describe('/server/app', () => {
  it('should render the page', () => {
    return fetch(app, '/').then((res) => {
      expect(res.body).toContain('<!DOCTYPE html>');
    });
  });
  it.skip('should handle redirects', () => {
    return fetch(app, '/redirect').then((res) => {
      expect(res.statusCode).toBe(302);
    });
  });
});
