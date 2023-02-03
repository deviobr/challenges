const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { Product } = require('../../../Database/models');
const productService = require('../../../Services/product.Services');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('#Product unit service', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('All product unit tests', () => {
    it('ao fazer uma solicitação ao service, se ele retorna um erro', async () => {
      sinon.stub(Product, 'findOne').rejects('"product_ids" not found');
      return expect(productService.readOne(70)).to.be.rejectedWith('"product_ids" not found');
    });
    it('ao fazer uma solicitação ao service, se ele retorna true', async () => {
      return expect(await productService.readOne(1)).to.be.true;
    });
  });
});
