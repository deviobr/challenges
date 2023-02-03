const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const userMock = require('../../mock/user.Mock');
const { User } = require('../../../Database/models');
const userService = require('../../../Services/user.Services');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('#User unit service', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('All user unit tests', () => {
    it('ao fazer uma solicitação ao service, se ele retorna corretamente', async () => {
      sinon.stub(User, 'findOne').resolves({ "total": 17, "discount": 83 });
      const result = await userService.payment(1);

      expect(result).to.be.a('object');
    });
  });
});
