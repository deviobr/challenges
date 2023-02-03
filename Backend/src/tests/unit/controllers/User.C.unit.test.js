const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const userMock = require('../../mock/user.Mock');
const userController = require('../../../Controllers/user.Controller');
const userService = require('../../../Services/user.Services');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('#User unit controller', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('All user unit tests', () => {
    it('ao enviar um id válido, se ele retorna corretamente', async () => {
      const req = {};
      const res = {};
    
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();


      sinon.stub(userService, 'payment').resolves({ "total": 17, "discount": 83 });

      await userController.payment(req, res);

      expect(res.status.calledWith(200));
      expect(res.json.calledWith({ "total": 17, "discount": 83 }));
    });
    it("ao enviar um id inválido, se ele retorna o erro 'id not found'", async () => {
      const req = {};
      const res = {};
    
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      
      req.params = { id: 70 };
      req.body = {};

      return expect(userController.payment(req, res)).to.be.rejectedWith('id not found');
    });
  });
});
