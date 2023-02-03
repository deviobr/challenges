const deliveryMock = {
  oneDelivery: {
    "name": "Eduardo",
    "UserProds": [
      {
        "user_id": 2,
        "product_id": 1,
        "full_price": 44,
        "is_done": 1
      },
      {
        "user_id": 2,
        "product_id": 2,
        "full_price": 44,
        "is_done": 1
      },
      {
        "user_id": 2,
        "product_id": 3,
        "full_price": 44,
        "is_done": 1
      },
      {
        "user_id": 2,
        "product_id": 5,
        "full_price": 44,
        "is_done": 1
      }
    ]
  },
  arrayDelivery: [
    {
      "user_id": 2,
      "product_id": 1,
      "full_price": 44,
      "is_done": 1
    },
    {
      "user_id": 2,
      "product_id": 2,
      "full_price": 44,
      "is_done": 1
    },
    {
      "user_id": 2,
      "product_id": 3,
      "full_price": 44,
      "is_done": 1
    },
    {
      "user_id": 2,
      "product_id": 5,
      "full_price": 44,
      "is_done": 1
    },
    {
      "user_id": 3,
      "product_id": 1,
      "full_price": 30,
      "is_done": 1
    },
    {
      "user_id": 3,
      "product_id": 5,
      "full_price": 30,
      "is_done": 1
    },
  ],
  requestNextDelivery: [
    {
      "user_id": 1,
      "product_id": 2,
      "full_price": 17,
      "is_done": 1
    },
    {
      "user_id": 1,
      "product_id": 1,
      "full_price": 17,
      "is_done": 1
    }
  ],
};

module.exports = deliveryMock;
