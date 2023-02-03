const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { User } = require('../../Database/models');
const userMock = require('../mock/user.Mock');
const api = require('../../api');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('#User', () => {
  beforeEach(() => {
    sinon.stub(User, 'findAll').resolves(userMock.arrayUser);
    sinon.stub(User, 'findOne').resolves(userMock.oneUser);
    sinon.stub(User, 'create').resolves(userMock.arrayCreateUser);
  });
  afterEach(() => {
    sinon.restore();
  });
  describe('All users tests', () => {
    it('ao fazer a requisição, se retorna todos os dados', async () => {
      const response = await request(api).get('/').send(userMock.arrayUser);
      
      expect(response.status).to.deep.be.eq(200);
      expect(response.body).to.be.an('array');
    });

    it('ao fazer a requisição de um nome de um produto se vem corretamente', async () => {
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
    });
  });
});