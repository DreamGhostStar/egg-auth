'use strict';

const mock = require('egg-mock');

describe('test/auth.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/auth-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, auth')
      .expect(200);
  });
});
