const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});

router.post("/shippingcost", (req, res) => {
  const response = {
    "rates": [
        {
            'service_name': 'canadapost-overnight',
            'service_code': 'ON',
            'total_price': '12.95',
            'currency': 'CAD',
            'min_delivery_date': '2013-04-12 14:48:45 -0400',
            'max_delivery_date': '2013-04-12 14:48:45 -0400'
        },
        {
            'service_name': 'fedex-2dayground',
            'service_code': '1D',
            'total_price': '29.34',
            'currency': 'USD',
            'min_delivery_date': '2013-04-12 14:48:45 -0400',
            'max_delivery_date': '2013-04-12 14:48:45 -0400'
        },
        {
            'service_name': 'fedex-2dayground',
            'service_code': '1D',
            'total_price': '29.34',
            'currency': 'USD',
            'min_delivery_date': '2013-04-12 14:48:45 -0400',
            'max_delivery_date': '2013-04-12 14:48:45 -0400'
        }
    ]
  }

  res.json(response);
})

module.exports = router;
