import faker from 'faker';

const products = [];

for (let i = 0; i < 50; i += 1) {
  const product = {};
  product.uuid = faker.random.uuid();
  product.name = faker.commerce.productName();
  product.price = faker.commerce.price();
  product.category = faker.commerce.department();
  product.image = faker.random.image();
  product.description = faker.lorem.paragraphs();
  products.push(product);
}

export default products;
