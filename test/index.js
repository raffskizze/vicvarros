import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.use(chaiHttp);

describe('Test', () => {
  describe('True', () => {
    it('it should return true', (done) => {
      done();
    });
  });
});
