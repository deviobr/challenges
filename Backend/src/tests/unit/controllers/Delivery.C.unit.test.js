const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const deliveryMock = require('../../mock/delivery.Mock');
const deliveryController = require('../../../Controllers/delivery.Controller');
const deliveryService = require('../../../Services/delivery.Services');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('#delivery unit controller', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('All delivery unit tests', () => {
    it('ao enviar um id válido, se ele retorna corretamente', async () => {
      const req = {};
      const res = {};
    
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();


      sinon.stub(deliveryService, 'request').resolves(deliveryMock.requestNextDelivery);

      await deliveryController.request(req, res);

      expect(res.status.calledWith(200));
      expect(res.json.calledWith(deliveryMock.requestNextDelivery));
    });
    it("ao enviar um id inválido, se ele retorna o erro 'id not found'", async () => {
      const req = {};
      const res = {};
    
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      
      req.params = { id: 70 };
      req.body = {};

      return expect(deliveryController.request(req, res)).to.be.rejectedWith('id not found');
    });
  });
});
