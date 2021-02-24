const express = require('express');
const statsController = require('../../controllers/statsController')
const router = express();

router.route('/').
    get(statsController.getCompaniesByQuery)

router.route('/income').
    get(statsController.getCompaniesByIncome)

router.route('/monthlypayment').
    get(statsController.getCompaniesByMonthlyPayment)

module.exports = router;