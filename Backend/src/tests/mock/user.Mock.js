const userMock = {
  arrayUser: [
    {
      "id": 1,
      "name": "arroz",
      "code": 101,
      "quantity": 3,
      "price": 10
    },
    {
      "id": 2,
      "name": "feijao",
      "code": 202,
      "quantity": 3,
      "price": 7
    },
    {
      "id": 3,
      "name": "salada",
      "code": 303,
      "quantity": 5,
      "price": 7
    },
    {
      "id": 4,
      "name": "frango",
      "code": 404,
      "quantity": 8,
      "price": 10
    },
    {
      "id": 5,
      "name": "carne vermelha",
      "code": 505,
      "quantity": 2,
      "price": 20
    }
  ],
  oneUser: {
    "id": 1,
    "name": "arroz",
    "code": 101,
    "quantity": 3,
    "price": 10
  },
  createUser: {
    "user_id": 4,
    "product_ids": [1, 2],
    "full_price": 17,
    "is_done": 1
  },
  arrayCreateUser: [
    {
      "user_id": 1,
      "product_id": 1,
      "full_price": 17,
      "is_done": 1
    },
    {
      "user_id": 1,
      "product_id": 2,
      "full_price": 17,
      "is_done": 1
    }
  ]
};

module.exports = userMock;
