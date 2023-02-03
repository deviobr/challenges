const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { User } = require('../../Database/models');
const deliveryMock = require('../mock/delivery.Mock');
const api = require('../../api');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('#Delivery', () => {
  beforeEach(() => {
    sinon.stub(User, 'findByPk').resolves(deliveryMock.oneDelivery);
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

    
  });
});

/* it('ao fazer a requisição de um nome de um produto se vem corretamente', async () => {
      const response = await request(api).get('/search?q=arroz').send(userMock.oneUser);

      expect(response.status).to.deep.be.eq(200);
      expect(response.body).to.deep.be.eq(userMock.oneUser);
    });

    it('ao fazer a requisição de um codigo de um produto se vem corretamente', async () => {
      const response = await request(api).get('/search?q=101').send(userMock.oneUser);

      expect(response.status).to.deep.be.eq(200);
      expect(response.body).to.deep.be.eq(userMock.oneUser);
    });

    it('ao mandar dados validos, se ele cria e retorna os dados corretamente', async () => {
      const response = await request(api).post('/requests').send(userMock.createUser);

      expect(response.status).to.deep.be.eq(201);
      expect(response.body).to.be.an('array');
    }); */