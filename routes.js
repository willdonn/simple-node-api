const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});

router.post("/shippingcost", (req, res) => {
  console.log(req);
const response = {
    "rates": [
        {
            'service_name': 'canadapost-overnight',
            'service_code': 'ON',
            'total_price': '1295',
            'currency': 'CAD',
            'min_delivery_date': '2013-04-12 14:48:45 -0400',
            'max_delivery_date': '2013-04-12 14:48:45 -0400'
        }
    ]
  }

  res.json(response);
})

module.exports = router;
