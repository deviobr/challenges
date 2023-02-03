const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { User, UserProd } = require('../../Database/models');
const deliveryMock = require('../mock/delivery.Mock');
const api = require('../../api');
const deliveryController = require('../../Controllers/delivery.Controller');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('#Delivery', () => {
  beforeEach(() => {
    sinon.stub(deliveryController, 'delivery').resolves(deliveryMock.oneDelivery);
    sinon.stub(UserProd, 'update').resolves();
    sinon.stub(UserProd, 'findAll').resolves(deliveryMock.arrayDelivery);
    sinon.stub(UserProd, 'destroy').resolves();
  });
  afterEach(() => {
    sinon.restore();
  });
  describe('All delivery tests', () => {
    it('ao fazer a requisição de um usuário, se retorna todos os dados corretamente', async () => {
      const response = await request(api).get('/delivery/2').send(deliveryMock.oneDelivery);
      
      expect(response.status).to.deep.be.eq(200);
      expect(response.body).to.deep.be.eq(deliveryMock.oneDelivery);
    });
    it("ao mandar um usuário invalido, se retorna a mensagem: 'id not found'", async () => {
      sinon.stub(User, 'findByPk').rejects({"message":"id not found"});
      
      const e = await request(api).get('/delivery/10').send({"message":"id not found"});
      
      expect(e.status).to.deep.be.eq(404);
      expect(e.text).to.be.eq('{"message":"id not found"}');
    });
    it('verifica se finalizar o pedido, se retorna um status 204', async () => {
      const response = await request(api).patch('/finalize/request/1').send();

      expect(response.status).to.deep.be.eq(204);
    });
    it("ao mandar um usuário invalido, se retorna a mensagem: 'id not found'", async () => {
      sinon.stub(User, 'findByPk').rejects({"message":"id not found"});
      
      const e = await request(api).patch('/finalize/request/10').send({"message":"id not found"});
      
      expect(e.status).to.deep.be.eq(404);
      expect(e.text).to.be.eq('{"message":"id not found"}');
    });
    it('ao buscar as proximos pedidos, se retorna corretamente', async () => {
      const response = await request(api).get('/next').send(deliveryMock.arrayDelivery);

      expect(response.status).to.deep.be.eq(200);
      expect(response.body).to.deep.be.eq(deliveryMock.arrayDelivery);
    });
    it('verifica se ao mandar um id válido, se ele deleta corretamente', async () => {
      const response = await request(api).delete('/delete/request/1').send();

      expect(response.status).to.deep.be.eq(204);
    })
  });
});
